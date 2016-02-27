const Schema = require('mongoose').Schema;

const Product = new Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
    },
    article: {
        type: Number,
    },
    price: {
        type: Number,
    },
    me: {
        type: String,
    },
    _rubric: {
        type: Schema.Types.ObjectId,
        ref: 'Rubric',
    },
});

module.exports = Product;
