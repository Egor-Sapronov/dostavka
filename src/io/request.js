import 'whatwg-fetch';

export default (url, params) => fetch(url, params).then(response => response.json());
