import test from 'ava';
import 'babel-register';
import { getSuggestItems } from './select';

test('getSuggestItems', t => {
    const state = {
        address: {
            key: {
                items: [1, 2, 3],
            },
        },
    };
    const props = { uuid: 'key' };
    const actual = getSuggestItems(state, props);

    const expected = [1, 2, 3];

    t.same(actual, expected);
});
