const database = require('./database');
const Rubric = require('./database').Rubric;
const Product = require('./database').Product;
const request = require('./request');
const cheerio = require('cheerio');
const _ = require('lodash');

const trace = data => {
    console.log(data); //eslint-disable-line
    return data;
};

database
.init()
.then(() => request(`${process.env.METRO_HOST}/category/produkty`))
.then(body => {
    const $ = cheerio.load(body);
    const rubricsNodes = [];

    $('.subcatalog.cat1 a.subcatalog_title').map((index, item) => {
        const title = _.get(item, 'children[0].data');

        rubricsNodes.push({
            title: title,
            href: `${process.env.METRO_HOST}/${_.get(item, 'children[0].parent.attribs.href')}?limit=9999`,
        });
    });

    return rubricsNodes;
})
.then(rubrics => Promise.all(rubrics.map(item => {
    return Rubric
      .findOne({title: item.title})
      .exec()
      .then(rubric => {
          if (rubric) {
              return {
                  rubricInstance: rubric,
                  rubric: item,
              };
          }

          const rubricItem = new Rubric({
              title: item.title,
          });

          return new Promise((resolve, reject) => {
              rubricItem.save((error) => {
                  if (error) {
                      return reject(error);
                  }
                  return resolve({
                      rubricInstance: rubricItem,
                      rubric: item,
                  });
              });
          });
      });
})))
.then(rubrics => Promise.all(rubrics.map(rubric => {
    return request(rubric.rubric.href)
        .then(body => {
            const $ = cheerio.load(body);
            const productsData = [];

            $('.catalog-i .catalog-i_w').map((index, item) => {
                const $2 = cheerio.load(item);
                const imgSrc = $2('.catalog-i_link img').attr('src') || '';
                const data = {
                    img: imgSrc.replace('150x150', '398x298'),
                    title: $2('.catalog-i_link img').attr('title'),
                    price: $2('a.add-to-list').data('regular_price'),
                    article: $2('a.add-to-list').data('article'),
                    me: $2('.bottom-line .bottom-line_item._count span').text(),
                };
                productsData.push(data);
            });

            return productsData;
        })
        .then(products => products.map(item => {
            return new Product({
                img: item.img,
                title: item.title,
                price: item.price,
                article: item.article,
                me: item.me,
                _rubric: rubric.rubricInstance,
            });
        }))
        .then(products => Promise.all(products.map(product => {
            return Product.findOne({
                article: product.article,
            })
            .exec()
            .then(item => {
                if (item) {
                    return item;
                }

                const productDocument = new Product({
                    img: product.img,
                    title: product.title,
                    price: product.price,
                    article: product.article,
                    me: product.me,
                    _rubric: rubric.rubricInstance,
                });

                return new Promise((resolve, reject) => {
                    productDocument.save((err, doc) => {
                        if (err) {
                            reject(err);
                        }

                        return resolve(doc);
                    });
                });
            });
        })));
})))
.catch(trace);
