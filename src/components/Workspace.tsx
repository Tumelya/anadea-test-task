import {ChangeEvent, useState} from "react";

type WorkspacePropsType = {
    handleAddNote: (title: string, text: string) => void
}

export const Workspace = (props: WorkspacePropsType) => {

    const date: Date = new Date();

    const [noteTitleText, setNoteTitleText] = useState("");
    const [noteText, setNoteText] = useState("");

    const titleCharacterLimit: number = 50;
    const noteCharacterLimit: number = 500;

    const handleChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (titleCharacterLimit - event.target.value.length >= 0) {
            setNoteTitleText(event.target.value);
        }
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (noteCharacterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteTitleText.trim().length > 0) {
            props.handleAddNote(noteTitleText, noteText);
            setNoteTitleText("");
            setNoteText("");
        }
    }

    return (
        <div className="workspace">
            <div className="date">{date.toLocaleDateString()}</div>
            <div className="text-writing">
                <textarea className="note-title"
                          placeholder="Create new note..."
                          value={noteTitleText}
                          onChange={handleChangeTitle}></textarea>
                <div className="characters">
                    <span>{titleCharacterLimit - noteTitleText.length}/{titleCharacterLimit}</span>
                </div>
                <textarea placeholder="Write some text here..."
                          value={noteText}
                          onChange={handleChange}></textarea>
                <div className="characters">
                    <span>{noteCharacterLimit - noteText.length}/{noteCharacterLimit}</span>
                </div>
            </div>
            <div className="note-footer">
                <button onClick={handleSaveClick}>Save</button>
                <button>Delete</button>
            </div>
        </div>
    )
}