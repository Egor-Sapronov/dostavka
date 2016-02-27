export const REQUEST_RUBRICS = 'REQUEST_RUBRICS';
export const RECEIVE_RUBRICS = 'RECEIVE_RUBRICS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export function requestProducts(rubricId) {
    return {
        type: REQUEST_PRODUCTS,
        rubricId,
    };
}

export function receiveProducts(result) {
    return {
        type: RECEIVE_PRODUCTS,
        result,
    };
}

export function requestRubrics() {
    return {
        type: REQUEST_RUBRICS,
    };
}

export function receiveRubrics(result) {
    return {
        type: RECEIVE_RUBRICS,
        result,
    };
}
