import {NotesType} from "../App";
import {Note} from "./Note";

type NoteListPropsType = {
    notes: Array<NotesType>
    open: boolean
    handleModalOpen: () => void
    handleModalClose: () => void
    deleteNote: (noteId: string) => void
}

export const NotesList = (props: NoteListPropsType) => {

    return (
        <div className="sidebar">
            {props.notes.map((note) => (
                <Note key={note.id} id={note.id}
                      title={note.title} date={note.date}
                      open={props.open}
                      handleModalOpen={props.handleModalOpen}
                      handleModalClose={props.handleModalClose}
                      deleteNote={props.deleteNote}
                />))}
        </div>
    )
}