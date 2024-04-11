const NOTES_KEY = 'notes';

export const getNotes = () => {
  const storedNotes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
  return storedNotes;
};

export const getNoteById = (id) => {
  const notes = getNotes();
  return notes.find(note => note.id === id);
};

export const saveNote = (note) => {
  const notes = getNotes();
  const updatedNotes = [...notes, note];
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
};

export const updateNote = (id, updatedNote) => {
  const notes = getNotes();
  const updatedNotes = notes.map(note => (note.id === id ? updatedNote : note));
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const updatedNotes = notes.filter(note => note.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
};