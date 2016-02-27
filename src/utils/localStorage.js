const basketKey = 'imBasketKey';
import findIndex from 'ramda/src/findIndex';
import remove from 'ramda/src/remove';

export const add = (id) => {
    const basket = localStorage.getItem(basketKey);

    if (basket) {
        const basketData = JSON.parse(basket);
        localStorage.setItem(basketKey, JSON.stringify([...basketData, id]));
    } else {
        localStorage.setItem(basketKey, JSON.stringify([id]));
    }

    return JSON.parse(localStorage.getItem(basketKey));
};

const isSame = id => item => id === item;

export const removeId = (id) => {
    const basket = localStorage.getItem(basketKey);
    if (basket) {
        const basketData = JSON.parse(basket);
        const basketWithoutId = remove(findIndex(isSame(id), basketData), 1, basketData);
        localStorage.setItem(basketKey, JSON.stringify([...basketWithoutId]));
    }

    return [];
};


