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
  // const [pokemonName, setPokemonName] = useState("");

  // const handleClick = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // };
  // const handleClickDecrement = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // };
  return (
    <>
      <nav>
        {pokemonList.map((pokemon, pokemonIndex) => (
          <button
            type="button"
            onClick={() => {
              setPokemonIndex(pokemonIndex);
            }}
            key={pokemon.name}
          >
            {" "}
            {pokemon.name}{" "}
          </button>
        ))}
      </nav>
      <div>
        <PokemonCard key={pokemonIndex} pokemon={pokemonList[pokemonIndex]} />
      </div>

      {/* <button onClick={handleClickDecrement} type="button"> Précédent </button> */}
      {/* <button onClick={handleClick} type="button">
        </button> */}
    </>
  );
}

// POKEMON INDEX

// {pokemonIndex > 0 ? (
//   <button onClick={handleClickDecrement} type="button">
//     {" "}
//     Précédent{" "}
//   </button>
// ) : (
//   ""
// )}

// {pokemonIndex < pokemonList.length - 1 ? (
//   <button onClick={handleClick} type="button">
//     {" "}
//     Suivant{" "}
//   </button>
// ) : (
//   ""
// )}
