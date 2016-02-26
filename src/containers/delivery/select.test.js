import test from 'ava';
import 'babel-register';
import { getAddresses } from './select';
import { Map } from 'immutable';

test('getAddresses', t => {
    const actual = getAddresses({
        address: Map({
            key1: {},
            key2: {},
        }),
    }).toArray();

    const expected = ['key1', 'key2'];

    t.same(actual, expected);
});
