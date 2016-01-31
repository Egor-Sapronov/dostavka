import test from 'ava';
import 'babel-register';
import 'babel-polyfill';
import { searchAddress } from '../address';
import { REQUEST_SEARCH, RECEIVE_SEARCH } from '../../actions/address';
import { searchGeo } from '../../io/api';

test('searchAddress', t => {
    const iterator = searchAddress();

    t.same(iterator.next().value, {TAKE: REQUEST_SEARCH});

    t.same(iterator.next({search: 'lenina', uuid: 'key'}).value, {CALL: {
        context: null,
        fn: searchGeo,
        args: ['lenina'],
    }});

    t.same(iterator.next([1, 2, 3]).value, {PUT: {
        type: RECEIVE_SEARCH,
        uuid: 'key',
        result: [1, 2, 3],
    }});
});
