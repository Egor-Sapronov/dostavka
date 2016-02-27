const request = require('request');

const reqPromise = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            if (err) {
                return reject(err);
            }
            return resolve(body);
        });
    });
};

module.exports = reqPromise;
