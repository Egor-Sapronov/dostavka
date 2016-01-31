import test from 'ava';
import 'babel-register';
import { getAddresses } from './select';

test('getAddresses', t => {
    const actual = getAddresses({
        address: {
            key1: {},
            key2: {},
        },
    });

    const expected = ['key1', 'key2'];

    t.same(actual, expected);
});
