// NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default NoteForm;
