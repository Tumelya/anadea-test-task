import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {ChangeEvent, useState} from "react";
import {ModalWindow} from "./ModalWindow";

type WorkspacePropsType = {
    handleAddNote: (title: string, text: string) => void
    open: boolean
    handleModalOpen: () => void
    handleModalClose: () => void
    deleteNote: (noteId: string) => void
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
                {/*<IconButton aria-label="delete" color="primary">
                    <DeleteIcon onClick={props.handleModalOpen}/>
                    <ModalWindow open={props.open}
                                 handleModalClose={props.handleModalClose}
                                 deleteNote={props.deleteNote}/>
                </IconButton>*/}
            </div>
        </div>
    )
}