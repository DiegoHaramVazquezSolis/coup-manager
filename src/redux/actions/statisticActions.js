import { statisticsRef } from "./../../services/DatabaseService";

export const GET_STATISTIC_SUCCESS = "GET_STATISTIC_SUCCESS";

/**
 * Method to get statistic of specific user in specific match
 * @param {string} uid User id
 * @param {string} statisticId Statistic id in database ej: Jornada1
 */
export const getStatistic = (uid, statisticId) => (dispatch) => {
    statisticsRef.child(uid).child(statisticId).once('value', (statistic) => {
        return dispatch(getStatisticSuccess(statistic.val()));
    });
}

function getStatisticSuccess(statistic) {
    return {
        type: GET_STATISTIC_SUCCESS,
        statistic
    }
}