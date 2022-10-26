import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type NoteTypeProps = {
    key: string
    id: string
    title: string
    date: string
}

export const Note = (props: NoteTypeProps) => {
    return (
        <div className="note">
            <span>{props.title}</span>
            <div className="notes-footer">
                <small>{props.date}</small>
                <IconButton aria-label="delete" color="primary">
                    <DeleteOutlinedIcon fontSize="small"/>
                </IconButton>
            </div>
        </div>
    )
}