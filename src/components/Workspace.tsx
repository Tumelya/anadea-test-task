import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {ChangeEvent, useState} from "react";
import {ModalWindow} from "./ModalWindow";
//import Modal from '@mui/material/Modal';

type WorkspacePropsType = {
    handleAddNote: (title: string, text: string) => void
    open: boolean
    handleModalOpen: () => void
    handleModalClose: () => void
}

export const Workspace = (props: WorkspacePropsType) => {

    const date: Date = new Date();

    const [noteTitleText, setNoteTitleText] = useState("");
    const [noteText, setNoteText] = useState("");

    const titleCharacterLimit: number = 50;
    const noteCharacterLimit: number = 500;

    const handleChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (titleCharacterLimit - event.target.value.length >= 0) {
            setNoteTitleText(event.target.value);
        }
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (noteCharacterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }
//Saving new notes function
    const handleSaveClick = () => {
        if (noteTitleText.trim().length > 0) {
            props.handleAddNote(noteTitleText, noteText);
            setNoteTitleText("");
            setNoteText("");
        }
    }

    return (
        <div className="workspace">
            <div className="date">{date.toLocaleDateString()}</div>
            <div className="text-writing">
                <textarea className="note-title"
                          placeholder="Create new note..."
                          value={noteTitleText}
                          onChange={handleChangeTitle}></textarea>
                <div className="characters">
                    <span>{titleCharacterLimit - noteTitleText.length}/{titleCharacterLimit}</span>
                </div>
                <textarea placeholder="Write some text here..."
                          value={noteText}
                          onChange={handleChange}></textarea>
                <div className="characters">
                    <span>{noteCharacterLimit - noteText.length}/{noteCharacterLimit}</span>
                </div>
            </div>
            <div className="note-footer">
                <IconButton aria-label="save" color="primary">
                    <SaveIcon onClick={handleSaveClick}/>
                </IconButton>
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon onClick={props.handleModalOpen}/>
                    <ModalWindow open={props.open}
                                 handleModalClose={props.handleModalClose}/>
                    {/*<Modal
                        open={open}
                        onClose={handleModalClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description">
                        <div className="modal">
                            <h2 id="simple-modal-title">Delete confirmation</h2>
                            <p id="simple-modal-description">
                                Do you really want to delete this note? The note will be deleted <b>forever</b>.
                                You will not be able to restore it after.
                            </p>
                            <div className="modal-buttons">
                                <button className="modal-delete">Delete</button>
                                <button className="modal-cancel"
                                        onClick={handleModalClose}>Cancel</button>
                            </div>
                        </div>
                    </Modal>*/}
                </IconButton>
            </div>
        </div>
    )
}