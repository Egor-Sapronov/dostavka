'use strict';

const urls = {
    requests: '/api/requests'
};

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function json(response) {
    return response.json();
}

export function postRequest(data) {
    return fetch(urls.requests, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(status)
        .then(json)
        .then(function (result) {

        });
}