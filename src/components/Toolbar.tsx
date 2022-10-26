import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="main-title">Notes</div>
            <div>
                <IconButton aria-label="add" color="primary">
                    <AddIcon onClick={()=>{}}/>
                </IconButton>
            </div>
        </div>
    )
}