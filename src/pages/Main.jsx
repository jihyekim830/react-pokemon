import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList, PokemonList } from '@features/pokemon';
import { Indicator, Error } from '@components';

const POKEMON_COUNT = 151;

function Main() {
  const {
    data: pokemonList,
    loading,
    error,
  } = useSelector((state) => state.pokemon.pokemonList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList({ resultCount: POKEMON_COUNT }));
  }, [dispatch]);

  if (loading || !pokemonList) return <Indicator />;
  if (error) return <Error message={error.message} />;
  return <PokemonList pokemonList={pokemonList} />;
}

export default Main;
