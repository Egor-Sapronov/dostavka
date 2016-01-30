import test from 'ava';
import 'babel-register';
import { getItems } from './select';

test('getItems', t => {
    const actual = getItems({
        address: {
            items: [{item: 1}],
        },
    });

    const expected = [{item: 1}];

    t.same(actual, expected);
});
