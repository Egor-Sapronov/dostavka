export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SELECT_ADDRESS = 'SELECT_ADDRESS';

export function selectAddress(uuid, address) {
    return {
        type: SELECT_ADDRESS,
        uuid,
        address,
    };
}

export function addAddress(uuid) {
    return {
        type: ADD_ADDRESS,
        uuid,
    };
}

export function requestSearch(uuid, search) {
    return {
        type: REQUEST_SEARCH,
        uuid,
        search,
    };
}

export function receiveSearch(uuid, result) {
    return {
        type: RECEIVE_SEARCH,
        uuid,
        result,
    };
}
