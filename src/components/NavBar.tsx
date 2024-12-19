import { useState } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
// let indexP = 0;
export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <>
      <nav>
        <button type="button" onClick={setPokemonIndex(index)}>
          {" "}
          Précendent
        </button>

        <button type="button"> Précendent</button>
      </nav>
    </>
  );
}

// {pokemonList.map((pokemon, index) => (
//     <button
//       key={pokemon.name}
//       type="button"
//       onClick={() => setPokemonIndex(index)}
//     >
//       {pokemon.name}
//     </button>
//   ))}
