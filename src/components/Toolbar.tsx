import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

export const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="main-title">Notes</div>
            <div>
                <Tooltip title="Add new note" arrow>
                    <IconButton aria-label="add" color="primary">
                        <AddIcon onClick={() => {
                        }}/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}