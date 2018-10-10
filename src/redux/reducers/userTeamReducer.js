import { combineReducers } from 'redux';
import { USER_TEAM_SUCCESS } from "./../actions/userTeamActions";

function team (state = {}, action) {
  switch (action.type) {
  case USER_TEAM_SUCCESS:
    return action.team;
  default:
    return state
  }
};

export const userTeamReducer = combineReducers({
    team
});
