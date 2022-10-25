import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {Toolbar} from "./components/Toolbar";
import {NotesList} from "./components/NotesList";
import {Workspace} from "./components/Workspace";

export type NotesType = {
    id: string
    title: string
    text: string
    date: string
}

function App() {

    const date = new Date();

    const [notes, setNotes] = useState<Array<NotesType>>([
        {
            id: nanoid(),
            title: "First Note",
            text: "Some text",
            date: date.toLocaleDateString()
        },
        {
            id: nanoid(),
            title: "Second Note",
            text: "Some text",
            date: date.toLocaleDateString()
        },
        {
            id: nanoid(),
            title: "Third Note",
            text: "Some text",
            date: date.toLocaleDateString()
        },
        {
            id: nanoid(),
            title: "Fourth Note",
            text: "Some text",
            date: date.toLocaleDateString()
        }
    ]);

    const addNote = (title: string, text: string) => {
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleDateString()
        };
        setNotes([...notes, newNote]);
    };

    return (
        <div className="App">
            <div className="toolbar">
                <Toolbar/>
            </div>
            <div className="sidebar">
                <NotesList notes={notes}/>
            </div>
            <div className="workspace">
                <Workspace handleAddNote={addNote}/>
            </div>
        </div>
    );
}

export default App;