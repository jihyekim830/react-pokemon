import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.idList.push(action.payload.id);
    },
    removeFromFavorite: (state, action) => {
      const target = state.idList.findIndex((id) => id === action.payload.id);
      state.idList.splice(target, 1);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
