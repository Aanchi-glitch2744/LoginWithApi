import React from 'react';

const NotesList = ({notes, setNotes, setEditNote}) => {
    const handleComplete = (note) => {
        setNotes(
            notes.map((item) =>{
                if(item.id === note.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findNote = notes.find((note) => note.id === id);
        setEditNote(findNote);
    }
    
    const handleDelete = ({id}) => {
        setNotes(notes.filter((note) => note.id !== id));
    };
  return (
    <div>
        {notes.map((note) => (
            <li className='list-item' key={note.id}>
                <input
                type='text'
                value={note.title}
                className={`list ${note.completed ? "complete" : ""}`}
                onChange={(event) => event.preventDefault()}
                />
                <button className='button-complete task-button' onClick={() => handleComplete(note)}>
                    <i className='fa fa-check-circle'></i>
                </button>
                <button className='button-edit task-button'onClick={() => handleEdit(note)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button' onClick={() => handleDelete(note)}>
                    <i className='fa fa-trash'></i>
                </button>
            </li>

        ))}
    </div>
  )
}

export default NotesList;