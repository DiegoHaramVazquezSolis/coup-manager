import {combineReducers} from 'redux';
import { GET_ALL_TEAM_MEMBERS_SUCCESS } from '../actions/teamMembersActions';

function teamMembers(state={}, action) {
    switch (action.type) {
        case GET_ALL_TEAM_MEMBERS_SUCCESS:
            return action.members;
        default:
            return state;
    }
}

export const teamMembersReducer = combineReducers({
    teamMembers
});