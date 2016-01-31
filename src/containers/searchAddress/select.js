import { createSelector } from 'reselect';
import { path, defaultTo } from 'ramda';

const defaultToArray = defaultTo([]);

export const getSuggestItems = (state, props) => path(['address', props.uuid, 'items'], state);

export default createSelector(
    getSuggestItems,
    items => {
        return {
            items: defaultToArray(items),
        };
    });
