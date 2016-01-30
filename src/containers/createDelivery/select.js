import { createSelector } from 'reselect';
import { path } from 'ramda';

export const getItems = path(['address', 'items']);

export default createSelector(getItems, (items) => {
    return {
        items,
    };
});
