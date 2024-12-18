import Footer from "./components/Footer";
import PokemonMain from "./components/PokemonsMain";
import "./App.css";

export default function App() {
  return (
    <div className="conteneurMain">
      <h1>Pokedex</h1>
      <PokemonMain />
      <Footer />
    </div>
  );
}
