import { combineReducers } from 'redux';
import { GET_CHAT_MESSAGE_SUCCESS } from '../actions/chatActions';

function chat(state = {chat: {}}, action) {
    switch (action.type) {
        case GET_CHAT_MESSAGE_SUCCESS:
            state.chat[action.message.key] = action.message.val();
            return {
                ...state
            };
        default:
            return state;
    }
}

export const chatReducer = combineReducers({
    chat
});