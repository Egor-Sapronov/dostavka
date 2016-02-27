export const REQUEST_RUBRICS = 'REQUEST_RUBRICS';
export const RECEIVE_RUBRICS = 'RECEIVE_RUBRICS';

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
