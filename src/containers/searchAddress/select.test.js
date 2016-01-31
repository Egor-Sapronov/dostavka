import test from 'ava';
import 'babel-register';
import { getSuggestItems } from './select';
import { fromJS, List } from 'immutable';

test('getSuggestItems', t => {
    const state = {
        address: fromJS({
            key: {
                items: List([1, 2, 3]),
            },
        }),
    };
    const props = { uuid: 'key' };
    const actual = getSuggestItems(state, props).toArray();

    const expected = [1, 2, 3];

    t.same(actual, expected);
});
