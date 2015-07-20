'use strict';

import AppServerActionCreators from '../actions/AppServerActionsCreators.js';
import RequestsActionsCreators from '../actions/RequestsActionsCreators.js';

const urls = {
  requests: '/api/requests'
};

function getHeaders() {
  return {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  };
}

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

export function getRequest(id) {
  return fetch(urls.requests + '/' + id, {
      method: 'GET',
      headers: getHeaders()
    })
    .then(status)
    .then(json)
    .then(function (result) {
      AppServerActionCreators.receiveRequest(result);
    });
}

export function putRequest(request, places) {
  request.places = places;
  return fetch(urls.requests + '/' + request._id, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(request)
    })
    .then(status)
    .then(json)
    .then(function (result) {
      return AppServerActionCreators.receiveUpdatedRequest(result);
    });
}

export function deleteRequest(id) {
  return fetch(urls.requests + '/' + id, {
      method: 'DELETE',
      headers: getHeaders()
    })
    .then(status)
    .then(function (result) {
      RequestsActionsCreators.getRequests();
    });
}

export function getRequests(options) {
  return fetch(urls.requests + (options.order ? '?order='+options.order : ''), {
      method: 'GET',
      headers: getHeaders()
    })
    .then(status)
    .then(json)
    .then(function (result) {
      return AppServerActionCreators.receiveRequests(result);
    });
}

export function postRequest(data) {
  return fetch(urls.requests, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data)
    })
    .then(status)
    .then(json);
}
