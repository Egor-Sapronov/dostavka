import { createSelector } from 'reselect';

export const getSuggestItems = (state, props) => state.address.getIn([props.uuid, 'items']);

export default createSelector(
    getSuggestItems,
    items => {
        return {
            items: items ? items.toArray() : [],
        };
    });
