// /app/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notesSlice';

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});
