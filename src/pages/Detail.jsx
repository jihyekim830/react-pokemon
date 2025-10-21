import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemonById } from '@features/pokemon';
import { Indicator, Error, FlipCard } from '@components';
import { FavoriteButton } from '@features/favorite';

function Detail() {
  const {
    data: pokemon,
    loading,
    error,
  } = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleAudioBtnClick = () => {
    const audio = new Audio(pokemon.cries);
    audio.volume = 0.05;
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    dispatch(getPokemonById({ id }));
  }, [dispatch, id]);

  console.log(typeof pokemon.id, typeof normalizedId);

  if (loading || !pokemon) return <Indicator />;
  if (error) return <Error message={error.message} />;
  return (
    <section className="mt-20 flex justify-center gap-20 px-20">
      <FlipCard
        front={pokemon.images.front}
        back={pokemon.images.back}
        description={pokemon.description}
      />
      <div className="">
        <div className="mb-5 flex gap-2">
          <p className="text-2xl">{pokemon.name}</p>
          <FavoriteButton id={pokemon.id} />
        </div>
        <div className="mb-2 flex items-center gap-2">
          <p>울음 소리: </p>
          <button className="text-2xl" onClick={handleAudioBtnClick}>
            🔊
          </button>
        </div>
        <p className="mb-10 text-lg whitespace-pre-wrap">
          {pokemon.description}
        </p>
        <p className="mb-1">분류: {pokemon.kind}</p>
        <div className="flex gap-2">타입: {pokemon.types.join(', ')}</div>
      </div>
    </section>
  );
}

export default Detail;
