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

    const deleteNote = (noteId: string) => {
        let filteredNotes = notes.filter(note => note.id !== noteId);
        setNotes(filteredNotes);
    }

    //Modal window for delete confirmation
    const [open, setOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <div className="toolbar">
                <Toolbar/>
            </div>
            <div className="sidebar">
                <NotesList notes={notes}
                           open={open}
                           handleModalOpen={handleModalOpen}
                           handleModalClose={handleModalClose}/>
            </div>
            <div className="workspace">
                <Workspace handleAddNote={addNote}
                           open={open}
                           handleModalOpen={handleModalOpen}
                           handleModalClose={handleModalClose}/>
            </div>
        </div>
    );
}

export default App;