import fetch from './request';
import { path } from 'ramda';

export const apiUrl = query => `${process.env.CATALOG_API_HOST}/?${query}&key=${process.env.CATALOG_API_KEY}`;
export const rubricsUrl = '/api/rubrics';
export const productsUrl = '/api/products?limit=20';

export const getProductsUrl = rubricId => rubricId ? `/api/rubrics/${rubricId}/products?limit=20` : productsUrl;

export const getRubrics = () => fetch(rubricsUrl).then(path(['result']));
export const getProducts = (rubricId) => fetch(getProductsUrl(rubricId)).then(path(['result']));

export const searchGeo = search =>
    fetch(`${process.env.CATALOG_API_HOST}/geo/search?q=${search}&region_id=1&key=${process.env.CATALOG_API_KEY}`)
        .then(path(['result', 'items']));
