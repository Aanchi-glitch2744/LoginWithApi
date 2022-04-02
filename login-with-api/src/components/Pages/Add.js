import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import Form from '../Form/Form';
import NotesList from '../NotesList/NotesList';
import './add.css';

const Add = () => {
  // const initialState = JSON.parse(localStorage.getitem("notes")) || [];
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);  //initialstate (for Localstorage)
  const [editNote, setEditNote] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);
 
    return (
      <div className='container-add'>
        <div className='app-wrapper'>
          <div><Heading /></div>
          <div>
            <Form 
            input={input}
            setInput={setInput}
            notes={notes}
            setNotes={setNotes}
            editNote={editNote}
            setEditNote={setEditNote}
            />
            </div>
            <div>
              <NotesList notes={notes} setNotes={setNotes} setEditNote={setEditNote} />
              </div>

        </div>
      </div>
    )
  
}
export default Add;
