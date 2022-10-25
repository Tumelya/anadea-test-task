import React, {useState} from 'react';
import {nanoid} from "nanoid";

export type NotesType = {
  id: string
  title: string
  date: string
}

function App() {

  const [notes, setNotes] = useState<Array<NotesType>>([
    {
      id: nanoid(),
      title: "First Note",
      date: "15/10/2022"
    },
    {
      id: nanoid(),
      title: "Second Note",
      date: "17/10/2022"
    },
    {
      id: nanoid(),
      title: "Third Note",
      date: "21/10/2022"
    },
    {
      id: nanoid(),
      title: "Fourth Note",
      date: "25/10/2022"
    }
  ]);

  return (
      <div className="App">

      </div>
  );
}

export default App;