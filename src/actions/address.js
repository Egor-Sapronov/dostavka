export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export function requestSearch(search) {
    return {
        type: REQUEST_SEARCH,
        search,
    };
}

export function receiveSearch(result) {
    return {
        type: RECEIVE_SEARCH,
        result,
    };
}
