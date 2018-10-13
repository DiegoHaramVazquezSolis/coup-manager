import { combineReducers } from 'redux';
import { GET_CHAT_MESSAGE_SUCCESS } from '../actions/chatActions';

function chat(state = {chat: []}, action) {
    switch (action.type) {
        case GET_CHAT_MESSAGE_SUCCESS:
            return {
                ...state,
                chat: state.chat.concat(action.message.val())
            };
        default:
            return state;
    }
}

export const chatReducer = combineReducers({
    chat
});