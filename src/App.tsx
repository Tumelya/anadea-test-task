import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import {Toolbar} from "./components/Toolbar";
import {NotesList} from "./components/NotesList";
import {Workspace} from "./components/Workspace";
import {SearchBox} from "./components/SearchBox";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import {Route, Routes, Link} from "react-router-dom";
import {EditNote} from "./components/EditNote";

export type NotesType = {
    id: string
    title: string
    text: string
    date: string
}

function App() {

    const date = new Date();
    const notesAsAString = localStorage.getItem("notes-data");
    let startNotes = [];
    if (notesAsAString) {
        startNotes = JSON.parse(notesAsAString);
    }
    const [notes, setNotes] = useState<Array<NotesType>>(startNotes);
    const [searchNote, setSearchNote] = useState("");
    const [clickedNoteId, setClickedNoteId] = useState<string>('');

    useEffect(() => {
        localStorage.setItem("notes-data", JSON.stringify(notes))
    }, [notes]);

    const addNote = (title: string, text: string) => {
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleString()
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (noteId: string) => {
        let filteredNotes = notes.filter(note => note.id !== noteId);
        setNotes(filteredNotes);
    };

    return (
        <div className="App">
            <div className="toolbar">
                <Toolbar/>
            </div>
            <div className="sidebar">
                <SearchBox handleSearchNote={setSearchNote}/>
                <NotesList notes={notes.filter((note) =>
                    note.title.toLowerCase().includes(searchNote))}
                           deleteNote={deleteNote} setClickedNoteId={setClickedNoteId}/>
                <Tooltip title="Add new note" arrow>
                    <div className="add">
                        <Link className="link" to="/add">
                            <IconButton aria-label="add" color="primary">
                                <AddIcon/>
                            </IconButton>
                        </Link>
                    </div>
                </Tooltip>
            </div>
            <div className="workspace">
                <Routes>
                    <Route path="/add" element={<Workspace handleAddNote={addNote}/>}/>
                    <Route path="/edit" element={<EditNote clickedNote={notes.filter(n => n.id === clickedNoteId)[0]}/>}>
                        <Route path="/edit/:id" element={<EditNote clickedNote={notes.filter(n => n.id === clickedNoteId)[0]}/>}></Route>
                    </Route>
                    <Route path="*" element={<Workspace handleAddNote={addNote}/>}/>
                </Routes>
                {/*<Workspace handleAddNote={addNote}/>*/}
            </div>
        </div>
    );
}

export default App;