export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const RECEIVE_FROM_BASKET = 'RECEIVE_FROM_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export function addToBasket(id) {
    return {
        type: ADD_TO_BASKET,
        id: id,
    };
}

export function receiveFromBasket(result) {
    return {
        type: RECEIVE_FROM_BASKET,
        result: result,
    };
}

export function removeFromBasket(id) {
    return {
        type: REMOVE_FROM_BASKET,
        id: id,
    };
}
