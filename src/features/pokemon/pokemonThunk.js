import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPokemonBaseById,
  fetchPokemonById,
  fetchPokemons,
} from '@api/pokemonApi';

const getPokemons = createAsyncThunk('pokemon/getPokemons', ({ resultCount }) =>
  fetchPokemons({ resultCount }),
);

const getPokemonById = createAsyncThunk(
  'pokemon/getPokemonById',
  async ({ id }, { getState }) => {
    const state = getState();
    const baseData =
      state.pokemon.pokemons.data?.find((p) => p.id === id) ??
      (await fetchPokemonBaseById({ id }));
    const detailData = await fetchPokemonById({ id });

    return { ...baseData, ...detailData };
  },
);

export { getPokemons, getPokemonById };
