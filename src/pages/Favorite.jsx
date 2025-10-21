import { useSelector } from 'react-redux';
import { Error } from '@components/index';
import { PokemonList } from '@features/pokemon';
import { getFavoritePokemonList } from '@features/favorite/favoriteSelector';

function Favorite() {
  const pokemonList = useSelector((state) => getFavoritePokemonList(state));

  if (pokemonList.length === 0)
    return <Error message="찜한 포켓몬이 없습니다." />;
  return <PokemonList pokemonList={pokemonList} />;
}

export default Favorite;
