import {NotesType} from "../App";
import {Note} from "./Note";
import {Link} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";

type NoteListPropsType = {
    notes: Array<NotesType>
    deleteNote: (noteId: string) => void
    setClickedNoteId: Dispatch<SetStateAction<string>>
}

export const NotesList = (props: NoteListPropsType) => {

    return (
        <div className="sidebar">
            {props.notes.map((note) => (
                <Link className="link" to={`/edit/${note.id}`}>
                <Note key={note.id} id={note.id}
                      title={note.title} date={note.date}
                      deleteNote={props.deleteNote}
                      setClickedNoteId={props.setClickedNoteId}
                /></Link>))}
        </div>
    )
}