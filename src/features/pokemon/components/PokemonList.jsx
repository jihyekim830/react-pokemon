import { PokemonCard } from '@features/pokemon';

function PokemonList({ pokemonList }) {
  return (
    <section className="flex flex-wrap justify-center gap-3">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default PokemonList;
