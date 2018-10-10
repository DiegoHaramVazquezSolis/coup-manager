import { teamsRef } from '../../services/DatabaseService';

export const USER_TEAM_SUCCESS = "USER_TEAM_SUCCESS";

/**
 * Function to store the team of the user
 * @param {string} teamName 
 */
export const getUserTeam = (teamName) => (dispatch) => {
    teamsRef.child(teamName.replace(' ','').toUpperCase())
    .on('value', (team) => {
        return dispatch(getUserTeamSuccess(team.val()));
    });
}

function getUserTeamSuccess(team) {
    return {
        type: USER_TEAM_SUCCESS,
        team
    }
}