import test from 'ava';
import 'babel-register';
import { RECEIVE_SEARCH, ADD_ADDRESS, SELECT_ADDRESS } from '../../actions/address';
import reducer from '../address';
import { Map, List, fromJS } from 'immutable';

test('RECEIVE_SEARCH', t => {
    const action = {
        type: RECEIVE_SEARCH,
        uuid: 'key',
        result: [1, 2, 3],
    };
    const actual = reducer(Map(), action).toJS();

    const expected = {
        key: {
            items: [1, 2, 3],
        },
    };

    t.same(actual, expected);
});

test('ADD_ADDRESS', t => {
    const action = {
        type: ADD_ADDRESS,
        uuid: 'key',
    };

    const actual = reducer(Map(), action).toJS();
    const expected = {
        key: {},
    };

    t.same(actual, expected);
});

test('SELECT_ADDRESS', t => {
    const action = {
        type: SELECT_ADDRESS,
        uuid: 'key',
        address: {
            name: 'lenina',
        },
    };
    const state = fromJS({
        key: {
            items: List([1, 2, 3]),
        },
    });
    const actual = reducer(state, action).toJS();

    const expected = {
        key: {
            selected: {
                name: 'lenina',
            },
        },
    };

    t.same(actual, expected);
});
