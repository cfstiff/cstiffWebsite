export default (state = { currentModal: null }, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            console.log(action.payload);
            // if there's no current modal, add a new one
            // also, if the modals don't match, swap to the new modal
            if (
                state.currentModal === null ||
                (state.currentModal !== action.payload &&
                    action.payload !== "close")
            ) {
                return { ...state, currentModal: action.payload };
            } else {
                return { ...state, currentModal: null };
            }
        default:
            return state;
    }
};
