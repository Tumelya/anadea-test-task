import React from 'react';
import Modal from '@mui/material/Modal';

type ModalPropsType = {
    id: string
    title: string
    open: boolean
    handleModalClose: () => void
    deleteNote: () => void
}

export const ModalWindow = (props: ModalPropsType) => {

    const deleteNote = () => {
        props.deleteNote()
        props.handleModalClose();
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <div className="modal">
                    <h2 id="simple-modal-title">Delete confirmation</h2>
                    <p id="simple-modal-description">
                        Do you really want to delete this note? The note will be deleted <b>forever</b>.
                        You will not be able to restore it after.
                    </p>
                    <div className="modal-buttons">
                        <button className="modal-delete"
                                onClick={deleteNote}>Delete
                        </button>
                        <button className="modal-cancel"
                                onClick={props.handleModalClose}>Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}