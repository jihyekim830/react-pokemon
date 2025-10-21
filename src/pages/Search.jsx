import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { getPokemonListByQuery, PokemonList } from '@features/pokemon';
import { Error } from '@components';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const pokemonList = useSelector((state) =>
    getPokemonListByQuery(state, query),
  );

  if (pokemonList.length === 0)
    return <Error message={'검색 결과가 없습니다.'} />;
  return <PokemonList pokemonList={pokemonList} />;
}

export default Search;
