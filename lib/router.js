const router = require('express').Router();
const Product = require('./database').Product;
const Rubric = require('./database').Rubric;

router.get('/rubrics', (req, res) => Rubric.find().exec().then(rubrics => res.send({result: rubrics})));

router.get('/products', (req, res) => {
    return Product
        .find()
        .skip(req.query.skip)
        .limit(req.query.limit)
        .exec()
        .then(products => res.send({result: products}));
});

router.get('/rubrics/:id/products', (req, res) => {
    return Product
        .find({ _rubric: req.params.id })
        .skip(req.query.skip)
        .limit(req.query.limit)
        .exec()
        .then(products => res.send({result: products}));
});

module.exports = router;
