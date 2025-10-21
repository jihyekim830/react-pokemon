import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '@features/pokemon';
import { favoriteReducer } from '@features/favorite';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorite: favoriteReducer,
  },
});

export default store;
