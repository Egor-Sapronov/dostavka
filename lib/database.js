const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
const rubricSchema = require('./rubric');
const productSchema = require('./product');
const Rubric = mongoose.model('Rubric', rubricSchema);
const Product = mongoose.model('Product', productSchema);

function initDB() {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGOLAB_URI);

        db.on('error', err => reject(err));
        db.on('open', () => {
            if (process.env.DROP_DATABASE) {
                mongoose.connection.db.dropDatabase(() => {});
            }

            return resolve(db);
        });
    });
}

module.exports = {
    db: db,
    init: initDB,
    Rubric: Rubric,
    Product: Product,
};
