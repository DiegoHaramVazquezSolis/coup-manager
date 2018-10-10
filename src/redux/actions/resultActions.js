import { resultsRef } from './../../services/DatabaseService';

export const GET_RESULT_SUCCESS = "GET_RESULT_SUCCESS";

/**
 * Method to get result (statistic) from specific match
 * @param {string} resultId Result id in database
 */
export const getResult = (resultId) => (dispatch) => {
    resultsRef.child(resultId).on('value', (staticResult) => {
        return dispatch(getResultSuccess(staticResult.val()));
    });
}

function getResultSuccess(result) {
    return {
        type: GET_RESULT_SUCCESS,
        result
    }
}