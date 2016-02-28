import request from './request';
import { path } from 'ramda';

export const apiUrl = query => `${process.env.CATALOG_API_HOST}/?${query}&key=${process.env.CATALOG_API_KEY}`;
export const rubricsUrl = '/api/rubrics';
export const productsUrl = '/api/products?limit=200';

const getSearch = search => search ? `&search=${search}` : '';

export const getProductsUrl = (rubricId, search) => rubricId ? `/api/rubrics/${rubricId}/products?limit=200${getSearch(search)}` : `${productsUrl}${search ? `&search=${search}` : ''}`;

export const getRubrics = () => request(rubricsUrl).then(path(['result']));

export const getProducts = (rubricId, search) => {
    const url = getProductsUrl(rubricId, search);
    return request(url).then(path(['result']));
};

export const searchGeo = search =>
    request(`${process.env.CATALOG_API_HOST}/geo/search?q=${search}&region_id=1&key=${process.env.CATALOG_API_KEY}`)
        .then(path(['result', 'items']));
