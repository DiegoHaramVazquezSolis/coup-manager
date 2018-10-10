import { teamsRef } from './../../services/DatabaseService';

export const ALL_TEAMS_SUCCESS = "ALL_TEAMS_SUCCESS";

/**
 * Method to get all the teams in the database
 */
export const getAllTeams = () => (dispatch) => {
    teamsRef.once('value', (teams) => {
        return dispatch(getAllTeamsSuccess(teams.val()));
    });
}

function getAllTeamsSuccess(teams) {
    return {
        type: ALL_TEAMS_SUCCESS,
        teams
    }
}