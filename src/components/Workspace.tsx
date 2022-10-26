import React from 'react';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';
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
    const clearAll = () => {
        setNoteTitleText("");
        setNoteText("");
    }

//Saving new notes function
    const handleSaveClick = () => {
        if (noteTitleText.trim().length > 0) {
            props.handleAddNote(noteTitleText, noteText);
            clearAll();
        }
    }

    return (
        <div className="workspace">
            <div className="date">{date.toLocaleString()}</div>
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
                {/*<Tooltip title="Edit" arrow>
                    <IconButton aria-label="edit" color="primary">
                        <EditIcon onClick={() => {
                        }}/>
                    </IconButton>
                </Tooltip>*/}
                <Tooltip title="Clear All" arrow>
                    <IconButton aria-label="clear" color="primary">
                        <ClearIcon onClick={clearAll}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Save" arrow>
                    <IconButton aria-label="save" color="primary">
                        <SaveIcon onClick={handleSaveClick}/>
                    </IconButton>
                </Tooltip>

                {/*<Tooltip title="Delete" arrow>
                    <IconButton aria-label="delete" color="primary">
                        <DeleteIcon onClick={props.handleModalOpen}/>
                        <ModalWindow open={props.open}
                                     handleModalClose={props.handleModalClose}
                                     deleteNote={props.deleteNote}/>
                    </IconButton>
                </Tooltip>*/}

            </div>
        </div>
    )
}