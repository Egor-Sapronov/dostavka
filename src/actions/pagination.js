export const NEXT_PAGE = 'NEXT_PAGE';
export const START_PAGE = 'START_PAGE';

export function nextPage() {
    return {
        type: NEXT_PAGE,
    };
}

export function startPage() {
    return {
        type: START_PAGE,
    };
}
