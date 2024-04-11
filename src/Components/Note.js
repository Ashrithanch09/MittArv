// Note.js
import React from 'react';


const Note = ({ note }) => {
  return (
    <div >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      {/* Render media links and other details */}
    </div>
  );
};

export default Note;
