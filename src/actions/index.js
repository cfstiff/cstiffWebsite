import { TOGGLE_MODAL } from "../constants/action-types";

export const toggleModal = modalName => ({
    type: TOGGLE_MODAL,
    payload: modalName
});
