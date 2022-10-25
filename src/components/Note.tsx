type NoteTypeProps = {
    key: string
    id: string
    title: string
    date: string
}

export const Note = (props: NoteTypeProps) => {
    return (
        <div className="note">
            <span>{props.title}</span>
            <div className="notes-footer">
                <small>{props.date}</small>
                <button>Delete</button>
            </div>
        </div>
    )
}