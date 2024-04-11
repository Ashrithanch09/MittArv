// HomePage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, selectAllNotes } from '../features/notesSlice';
import NoteList from '../Components/NoteList';
import SearchBar from '../Components/SearchBar';
import SortButton from '../Components/SortButton';
import FloatingButton from '../Components/FloatingButton';
import NoteForm from '../Components/NoteForm';


const HomePage = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectAllNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);

  const handleSaveNote = (note) => {
    dispatch(addNote(note));
    setShowNoteForm(false);
  };

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div >
      <div >
        <SearchBar onSearch={setSearchTerm} />
        <SortButton />
        <FloatingButton onClick={() => setShowNoteForm(true)} />
      </div>
      <div >
        <NoteList notes={filteredNotes} />
      </div>
      {showNoteForm && <NoteForm onSave={handleSaveNote} />}
    </div>
  );
};

export default HomePage;
