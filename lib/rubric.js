const Schema = require('mongoose').Schema;

const Rubric = new Schema({
    title: {
        type: String,
        unique: true,
    },
});

module.exports = Rubric;
