import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import Form from '../Form/Form';
import NotesList from '../NotesList/NotesList';
import './add.css';

const Add = () => {
  
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);  
  const [editNote, setEditNote] = useState(null);

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
