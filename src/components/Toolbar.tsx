import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import {SearchBox} from "./SearchBox";

type ToolbarPropsType = {
    handleSearchNote: (value: string) => void
}

export const Toolbar = (props: ToolbarPropsType) => {
    return (
        <div className="header">
            <div className="main-title">Notes</div>
            <div className="toolbar-icons">
                <Tooltip title="Add new note" arrow>
                    <IconButton aria-label="add" color="primary">
                        <AddIcon onClick={() => {}}/>
                    </IconButton>
                </Tooltip>
                <SearchBox handleSearchNote={props.handleSearchNote}/>
            </div>
        </div>
    )
}