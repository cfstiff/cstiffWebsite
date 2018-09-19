import { TOGGLE_MODAL } from "../constants/action-types";

export const toggleModal = modalName => dispatch => {
    dispatch({
        type: TOGGLE_MODAL,
        payload: modalName
    });
};
