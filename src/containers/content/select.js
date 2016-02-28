import { createSelector } from 'reselect';

export const getCatalog = state => state.catalog;
export const getBasket = state => state.basket;
export default createSelector(
    getCatalog,
    getBasket,
    (catalog, basket) => {
        const products = catalog.get('products').toArray();
        return {
            rubrics: catalog.get('rubrics').toArray(),
            products: products.map(item => {
                const inBasket = basket.productsInBasket.filter(data => {
                    //console.log('data', data);
                    //console.log(item._id);
                    console.log(data === item._id);
                    return data === item._id;
                });

                return {
                    ...item,
                    inBasket: inBasket.length
                };
            }),
        };
    });
