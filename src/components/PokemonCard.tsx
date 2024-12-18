interface pokemon {
  pokemon: { name: string; imgSrc?: string };
}

export default function PokemonCard({ pokemon }: pokemon) {
  return (
    <>
      <figure className="pokemonCard">
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p> {pokemon.name} : "j'ai pas de photo :/ "</p>
        )}
        <figcaption> {pokemon.name}</figcaption>
      </figure>
    </>
  );
}
