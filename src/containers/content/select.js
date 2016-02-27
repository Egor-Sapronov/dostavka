import { createSelector } from 'reselect';

export const getCatalog = state => state.catalog;
export default createSelector(
    getCatalog,
    (catalog) => {
        return {
            rubrics: catalog.get('rubrics').toArray(),
        };
    });
