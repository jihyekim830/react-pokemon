import { createSelector } from '@reduxjs/toolkit';

const getFavoritePokemonList = createSelector(
  [(state) => state.pokemon.pokemonList.data, (state) => state.favorite.idList],
  (pokemonList, idList) =>
    pokemonList.filter((pokemon) => idList.includes(pokemon.id)),
);

export { getFavoritePokemonList };
