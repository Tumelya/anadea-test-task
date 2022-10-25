export const Workspace = () => {

    return (
        <div className="workspace">
            <div className="date">25 Dec 2022</div>
            <div className="text-writing">
                <textarea className="note-title" placeholder="Create a new note..."></textarea>
                <textarea placeholder="Write some text here..."></textarea>
            </div>
            <div className="note-footer">
                <button>Save</button>
                <button>Delete</button>
            </div>
        </div>
    )
}