import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {ModalWindow} from "./ModalWindow";

type NoteTypeProps = {
    key: string
    id: string
    title: string
    date: string
    open: boolean
    handleModalOpen: () => void
    handleModalClose: () => void
    deleteNote: (noteId: string) => void
}

export const Note = (props: NoteTypeProps) => {

    /*const deleteNote = () => {
        props.deleteNote(props.id);
    }*/

    return (
        <div className="note">
            <span>{props.title}</span>
            <div className="notes-footer">
                <small>{props.date}</small>
                <div>
                    <IconButton aria-label="delete" color="primary">
                        <DeleteOutlinedIcon fontSize="small" onClick={props.handleModalOpen}/>
                    </IconButton>
                    <ModalWindow id={props.id} open={props.open} handleModalClose={props.handleModalClose}
                                 deleteNote={props.deleteNote}/>
                </div>
            </div>
        </div>
    )
}