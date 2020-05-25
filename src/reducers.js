import { combineReducers } from 'redux';
import {
    // eslint-disable-next-line max-len
    ADD_TEST,
} from './actions';

function addTest(state = 3333, action) {
    switch (action.type) {
        case ADD_TEST:
            return action.text;
        default:
            return state;
    }
}

const reducer = combineReducers({
    addTest,
});

export default reducer;
