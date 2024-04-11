// notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    // Add other reducers for updating, searching, sorting notes
  },
});

export const { addNote } = notesSlice.actions;

export const selectAllNotes = (state) => state.notes.notes;

export default notesSlice.reducer;
