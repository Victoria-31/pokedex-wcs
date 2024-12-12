import PokemonCard from "./PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default function PokemonMain() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickDecrement = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <>
      {/* <div>
        {pokemonList[pokemonIndex].map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div> */}

      <div>
        <PokemonCard key={pokemonIndex} pokemon={pokemonList[pokemonIndex]} />
      </div>

      {pokemonIndex > 0 ? (
        <button onClick={handleClickDecrement} type="button">
          {" "}
          Précédent{" "}
        </button>
      ) : (
        <p> </p>
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick} type="button">
          {" "}
          Suivant{" "}
        </button>
      ) : (
        <p> </p>
      )}

      {/* <button onClick={handleClickDecrement} type="button"> Précédent </button> */}
      {/* <button onClick={handleClick} type="button">
        {" "}
        Suivant{" "}
      </button> */}
    </>
  );
}
