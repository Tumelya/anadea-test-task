import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Tooltip from '@mui/material/Tooltip';
import {ModalWindow} from "./ModalWindow";

type NoteTypeProps = {
    key: string
    id: string
    title: string
    date: string
    deleteNote: (noteId: string) => void
}

export const Note = (props: NoteTypeProps) => {

    //Modal window for delete confirmation
    const [open, setOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <div className="note">
            <span>{props.title}</span>
            <div className="notes-footer">
                <small className="note-date">{props.date}</small>
                <div>
                    <Tooltip title="Delete" arrow>
                        <IconButton aria-label="delete" color="primary">
                            <DeleteOutlinedIcon fontSize="small" onClick={handleModalOpen}/>
                        </IconButton>
                    </Tooltip>
                    <ModalWindow id={props.id} title={props.title} open={open} handleModalClose={handleModalClose}
                                 deleteNote={() => props.deleteNote(props.id)}/>
                </div>
            </div>
        </div>
    )
}