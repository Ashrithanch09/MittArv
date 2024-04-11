// NoteList.js
import React from 'react';
import Note from './Note';


const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map(note => <Note key={note.id} note={note} />)}
    </div>
  );
};

export default NoteList;
