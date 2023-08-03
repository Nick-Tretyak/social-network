const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newPostText,
            }
            state.messages.push(newMessage);
            state.newPostText = '';
            return state;
        case UPDATE_DIALOG_MESSAGE:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateDialogMessageActionCreator = (text) => {

    return {
        type: UPDATE_DIALOG_MESSAGE, newText: text
    }
}

export default dialogsReducer;