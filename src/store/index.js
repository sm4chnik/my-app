import { configureStore, createSlice } from '@reduxjs/toolkit';

const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.unshift(action.payload);
    },
    removeElement: (state) => {
      state.pop();
    }
  }
});

export const { addElement, removeElement } = elementsSlice.actions;
export const store = configureStore({ reducer: { elements: elementsSlice.reducer } });
