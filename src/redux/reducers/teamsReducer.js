import {combineReducers} from 'redux';
import { ALL_TEAMS_SUCCESS } from "../actions/teamsActions";

function teams(state = {}, action) {
  switch (action.type) {
    case ALL_TEAMS_SUCCESS:
        return action.teams;
    default:
        return state
  }
};

export const teamsReducer = combineReducers({
    teams
});