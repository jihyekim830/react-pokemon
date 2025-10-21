import { createSlice } from '@reduxjs/toolkit';
import { getPokemonById, getPokemonList } from '@features/pokemon/pokemonThunk';

const initialState = {
  pokemonList: { data: [], loading: false, error: null },
  selectedPokemon: { data: null, loading: false, error: null },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getPokemonList
      .addCase(
        getPokemonList.pending,
        createAsyncCaseHandler({
          stateKey: 'pokemonList',
          status: 'pending',
        }),
      )
      .addCase(
        getPokemonList.fulfilled,
        createAsyncCaseHandler({
          stateKey: 'pokemonList',
          status: 'fulfilled',
        }),
      )
      .addCase(
        getPokemonList.rejected,
        createAsyncCaseHandler({
          stateKey: 'pokemonList',
          status: 'rejected',
        }),
      )

      // getPokemonById
      .addCase(
        getPokemonById.pending,
        createAsyncCaseHandler({
          stateKey: 'selectedPokemon',
          status: 'pending',
        }),
      )
      .addCase(
        getPokemonById.fulfilled,
        createAsyncCaseHandler({
          stateKey: 'selectedPokemon',
          status: 'fulfilled',
        }),
      )
      .addCase(
        getPokemonById.rejected,
        createAsyncCaseHandler({
          stateKey: 'selectedPokemon',
          status: 'rejected',
        }),
      );
  },
});

function createAsyncCaseHandler({ stateKey, status }) {
  switch (status) {
    case 'pending':
      return (state) => {
        state[stateKey].loading = true;
        state[stateKey].error = null;
      };
    case 'fulfilled':
      return (state, action) => {
        state[stateKey].data = action.payload;
        state[stateKey].loading = false;
      };

    case 'rejected':
      return (state, action) => {
        const message = action.payload.message;

        state[stateKey].error = { message };
        state[stateKey].loading = false;
      };

    default:
      return (state) => {
        state[stateKey].error = { message: `${status}: Invalid type` };
        state[stateKey].loading = false;
      };
  }
}

export default pokemonSlice.reducer;
