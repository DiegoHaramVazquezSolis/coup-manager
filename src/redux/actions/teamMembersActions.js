import { teamsRef } from './../../services/DatabaseService';

export const GET_ALL_TEAM_MEMBERS_SUCCESS = "GET_ALL_TEAM_MEMBERS_SUCCESS";

/**
 * Metodo para obtener los miembros de determinado equipo
 * @param {string} teamName Nombre del equipo al que pertenecen los miembros
 */
export const getTeamMembers = (teamName) => (dispatch) => {
    teamsRef.child(teamName.replace(' ','').toUpperCase()).child('Players')
    .once('value', (members) => {
        return dispatch(getAllTeamMembersSuccess(members.val()));
    });
}

function getAllTeamMembersSuccess(members) {
    return {
        type: GET_ALL_TEAM_MEMBERS_SUCCESS,
        members
    }
}