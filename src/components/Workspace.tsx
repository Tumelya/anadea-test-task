import {ChangeEvent, useState} from "react";

export const Workspace = () => {

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

    return (
        <div className="workspace">
            <div className="date">25 Dec 2022</div>
            <div className="text-writing">
                <textarea className="note-title"
                          placeholder="Create a new note..."
                          value={noteTitleText}
                          onChange={handleChangeTitle}></textarea>
                <div className="characters">
                    {titleCharacterLimit - noteTitleText.length}/{titleCharacterLimit}
                </div>
                <textarea placeholder="Write some text here..."
                          value={noteText}
                          onChange={handleChange}></textarea>
                <div className="characters">
                    {noteCharacterLimit - noteText.length}/{noteCharacterLimit}
                </div>
            </div>
            <div className="note-footer">
                <button>Save</button>
                <button>Delete</button>
            </div>
        </div>
    )
}