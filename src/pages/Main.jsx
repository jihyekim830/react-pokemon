import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '@features/pokemon/pokemonThunk';
import { useNavigate } from 'react-router';

const POKEMON_COUNT = 151;

function Main() {
  const dispatch = useDispatch();
  const {
    data: pokemons,
    loading,
    error,
  } = useSelector((state) => state.pokemon?.pokemons);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPokemons({ resultCount: POKEMON_COUNT }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="flex flex-wrap gap-5">
      {pokemons.map((pokemon) => (
        <article
          key={pokemon.id}
          className="flex h-60 w-60 flex-col items-center justify-center rounded-md border p-2"
          onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
          <img src={pokemon.images.front} alt={pokemon.description} />
          <p>{pokemon.name}</p>
          <p>{pokemon.kind}</p>
        </article>
      ))}
    </section>
  );
}

export default Main;
