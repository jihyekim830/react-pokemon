import { createSelector } from '@reduxjs/toolkit';
import { getRegExp } from 'korean-regexp';

const getPokemonListByQuery = createSelector(
  [(state) => state.pokemon.pokemonList.data, (_, query) => query],
  (state, query) => state.filter((p) => getRegExp(query).test(p.name)),
);

export { getPokemonListByQuery };
