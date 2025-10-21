import { memo, useState } from 'react';
import { Link } from 'react-router';
import { FavoriteButton } from '@features/favorite';
import clsx from 'clsx';

const PokemonCard = memo(function PokemonCard({ pokemon }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <article key={pokemon.id} className="pokemon-card">
      <Link to={`/details/${pokemon.id}`} className="absolute inset-0" />
      <div className="mb-1 size-40">
        <img
          src={pokemon.images.front}
          alt={pokemon.description}
          onLoad={() => setIsImageLoading(false)}
          className={clsx('size-full', isImageLoading && 'hidden')}
        />
        <p
          className={clsx(
            'flex-center size-full rounded-md bg-stone-100',
            !isImageLoading && 'hidden',
          )}
        >
          Loading...
        </p>
      </div>
      <div className="flex gap-1">
        <p className="text-lg">{pokemon.name}</p>
        <FavoriteButton id={pokemon.id} />
      </div>
      <p className="text-sm text-stone-500">#{pokemon.kind}</p>
    </article>
  );
});

export default PokemonCard;
