// import { useState } from "react";

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
        {pokemonList.map((Pokemon, index) => (
          <button
            key={Pokemon.name}
            type="button"
            onClick={() => setPokemonIndex(index)}
          >
            {Pokemon.name}
          </button>
        ))}
      </nav>
    </>
  );
}
