import { createSelector } from 'reselect';
import { path, keys, compose } from 'ramda';

export const getAddresses = compose(keys, path(['address']));

export default createSelector(
    getAddresses, (items) => {
        return {
            items,
        };
    });
