import { getPokemonById } from '@features/pokemon/pokemonThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: pokemon,
    loading,
    error,
  } = useSelector((state) => state.pokemon?.selectedPokemon);

  console.log(pokemon);

  useEffect(() => {
    dispatch(getPokemonById({ id }));
  }, [dispatch, id]);

  if (loading || !pokemon) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <img src={pokemon.images?.front} alt={pokemon.description} />
      <p>{pokemon.name}</p>
      <p>{pokemon.types[0]}</p>
    </div>
  );
}

export default Detail;
