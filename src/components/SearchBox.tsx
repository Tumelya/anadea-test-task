import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";

type SearchBoxPropsType = {
    handleSearchNote: (value: string) => void
}

export const SearchBox = (props: SearchBoxPropsType) => {

    return (
        <div className="search">
            <IconButton aria-label="Search" color="primary">
                <SearchIcon/>
            </IconButton>
            <input onChange={(event) => props.handleSearchNote(event.target.value)}
                   type="text" placeholder="type to search..."/>
        </div>
    )
}