import 'whatwg-fetch';

export default (url, params = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}) => fetch(url, params).then(response => response.json());
