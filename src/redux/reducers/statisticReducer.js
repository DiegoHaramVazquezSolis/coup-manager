import {combineReducers} from 'redux';
import { GET_STATISTIC_SUCCESS } from '../actions/statisticActions';

function statistic(state={}, action) {
    switch (action.type) {
        case GET_STATISTIC_SUCCESS:
            return action.statistic
        default:
            return state;
    }
}

export const statisticReducer = combineReducers({
    statistic
});