import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import {Link} from "react-router-dom";

export const Toolbar = () => {
    return (
        <div className="header">
            <div className="main-title">Notes</div>
            <Tooltip title="Add new note" arrow>
                <Link to="/add">
                    <IconButton aria-label="add" color="primary">
                        <AddIcon/>
                    </IconButton>
                </Link>
            </Tooltip>
        </div>
    )
}