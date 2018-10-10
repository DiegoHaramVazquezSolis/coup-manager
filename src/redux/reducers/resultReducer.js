import {combineReducers} from 'redux';
import { GET_RESULT_SUCCESS } from '../actions/resultActions';

function result(state={}, action) {
    switch (action.type) {
        case GET_RESULT_SUCCESS:
            return action.result
        default:
            return state;
    }
}

export const resultReducer = combineReducers({
    result
});