import { configureStore } from '@reduxjs/toolkit';
import PokemonReducer from '@features/pokemon/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: PokemonReducer,
  },
});

export default store;
