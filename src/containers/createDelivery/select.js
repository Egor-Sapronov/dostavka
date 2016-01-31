import { createSelector } from 'reselect';

export const getAddresses = state => state.address.keySeq();
export default createSelector(
    getAddresses, (items) => {
        return {
            items,
        };
    });
