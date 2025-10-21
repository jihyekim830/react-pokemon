import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPokemonBaseById,
  fetchPokemonById,
  fetchPokemonList,
} from '@features/pokemon/api/pokemonApi';

const getPokemonList = createAsyncThunk(
  'pokemon/getPokemonList',
  async ({ resultCount }, { rejectWithValue }) => {
    try {
      return await fetchPokemonList({ resultCount });
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  },
);

const getPokemonById = createAsyncThunk(
  'pokemon/getPokemonById',
  async ({ id }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const baseData =
        state.pokemon.pokemonList.data?.find((p) => p.id === Number(id)) ??
        (await fetchPokemonBaseById({ id }));
      const detailData = await fetchPokemonById({ id });

      return { ...baseData, ...detailData };
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  },
);

export { getPokemonList, getPokemonById };
