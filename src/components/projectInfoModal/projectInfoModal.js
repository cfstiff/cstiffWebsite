import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { toggleModal } from "../../actions/index";
import modalInfo, { modalHeader } from "./modalInfo";
import "./projectInfoModal.css";

class ProjectInfoModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalOpen}
                    toggle={this.props.toggleModal}
                >
                    <ModalHeader toggle={this.props.toggleModal}>
                        {modalHeader(this.props.currentModal)}
                    </ModalHeader>

                    <ModalBody>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: modalInfo(this.props.currentModal)
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            onClick={this.props.toggleModal}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    modalOpen: state.toggleModalReducer.currentModal !== null,
    currentModal: state.toggleModalReducer.currentModal
});
const mapDispatchToProps = dispatch => ({
    toggleModal: () => {
        dispatch(toggleModal("close"));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectInfoModal);
