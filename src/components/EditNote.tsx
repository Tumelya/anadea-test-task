import React, {useEffect} from 'react';

import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';
import {ChangeEvent, useState} from "react";
import {NotesType} from "../App";
import {useParams} from "react-router-dom";


type EditNotePropsType = {
    clickedNote: NotesType
}

export const EditNote = (props: EditNotePropsType) => {
    const notesAsAString = localStorage.getItem("notes-data");
    let startNotes: NotesType[] = [];
    if (notesAsAString) {
        startNotes = JSON.parse(notesAsAString);
    }

    /*const date: Date = new Date();*/

    const {id} = useParams()
    const [noteTitleText, setNoteTitleText] = useState(startNotes.filter(n => n.id === id)[0].title);
    const [noteText, setNoteText] = useState(props.clickedNote?.text);

    useEffect(() => {
        setNoteTitleText(startNotes.filter(n => n.id === id)[0].title)
    }, [id]);
    useEffect(() => {
        setNoteText(startNotes.filter(n => n.id === id)[0].text)
    }, [id]);

    const titleCharacterLimit: number = 50;
    //const noteCharacterLimit: number = 500;

    const handleChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (titleCharacterLimit - event.target.value.length >= 0) {
            setNoteTitleText(event.target.value);
        }
    }
    /*const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (noteCharacterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }*/

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value) {
            setNoteText(event.target.value);
        }
    }

    const clearAll = () => {
        setNoteTitleText("");
        setNoteText("");
    }

//Saving edit note function
    /*const handleSaveClick = () => {
        if (noteTitleText?.trim()?.length > 0) {
            //handleAddNote(noteTitleText, noteText);
            clearAll();
        }
    }*/

    return (
        <div className="workspace">
            <div className="date">{props.clickedNote.date}</div>
            <div className="text-writing">
                <textarea className="note-title"
                          placeholder="Title..."
                          value={noteTitleText}
                          onChange={handleChangeTitle}></textarea>
                {/*<div className="characters">
                    <span>{titleCharacterLimit - noteTitleText.length}/{titleCharacterLimit}</span>
                </div>*/}
                <textarea placeholder="Write some text here..."
                          value={noteText}
                          onChange={handleChange}></textarea>
                {/*<div className="characters">
                    <span>{noteCharacterLimit - noteText.length}/{noteCharacterLimit}</span>
                </div>*/}
            </div>
            <div className="note-footer">
                <Tooltip title="Edit" arrow>
                    <IconButton aria-label="edit" color="primary">
                        <EditIcon onClick={() => {
                        }}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Clear All" arrow>
                    <IconButton aria-label="clear" color="primary">
                        <ClearIcon onClick={clearAll}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Save" arrow>
                    <IconButton aria-label="save" color="primary">
                        {/*<SaveIcon onClick={handleSaveClick}/>*/}
                    </IconButton>
                </Tooltip>

            </div>
        </div>
    )
}