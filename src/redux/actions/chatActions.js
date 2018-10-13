import { chatsRef } from "../../services/DatabaseService";

export const GET_CHAT_MESSAGE_SUCCESS = "GET_CHAT_MESSAGE_SUCCESS";

export const getChatMessages = (teamName) => (dispatch) => {
    chatsRef.child(teamName.replace(' ','').toUpperCase())
    .orderByChild('timeStamp')
    .limitToLast(10)
    .on('child_added', (messages) => {
        dispatch(getMessage(messages));
    });
}

function getMessage(message) {
    return {
        type: GET_CHAT_MESSAGE_SUCCESS,
        message
    }
}