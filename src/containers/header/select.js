import { createSelector } from 'reselect';

export const getProducts = state => state.basket;
export default createSelector(
    getProducts,
    (basket) => {
        return {
            productsCount: basket.productsInBasket.length,
        };
    });
