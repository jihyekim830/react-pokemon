import { createSlice } from '@reduxjs/toolkit';
import { getPokemonById, getPokemons } from '@features/pokemon/pokemonThunk';

const initialState = {
  pokemons: { data: [], loading: false, error: null },
  selectedPokemon: { data: null, loading: false, error: null },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getPokemons
      .addCase(getPokemons.pending, (state) => {
        state.pokemons.loading = true;
        state.pokemons.error = null;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons.data = action.payload;
        state.pokemons.loading = false;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        const message = formatErrorMessage({ err: action.error });

        state.pokemons.error = { message };
        state.pokemons.loading = false;
      })

      // getPokemonById
      .addCase(getPokemonById.pending, (state) => {
        state.selectedPokemon.loading = true;
        state.selectedPokemon.error = null;
      })
      .addCase(getPokemonById.fulfilled, (state, action) => {
        state.selectedPokemon.data = action.payload;
        state.selectedPokemon.loading = false;
      })
      .addCase(getPokemonById.rejected, (state, action) => {
        const message = formatErrorMessage({ err: action.error });

        state.selectedPokemon.error = { message };
        state.selectedPokemon.loading = false;
      });
  },
});

function formatErrorMessage({ err }) {
  if (!err.message)
    return '예기치 않은 오류가 발생했습니다.\n잠시 후에 다시 시도해 주세요.';
  else if (!err.code) return err.message;
  else return `${err.code}: ${err.message}`;
}

export default pokemonSlice.reducer;
