import React, { useEffect, useState } from "react";
import { IpokemonList } from "../Types/IpokemonList";

import "../styles/App.css";
import PokemonData from "./PokemonData";

const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const App = () => {
  const [pokemons, setPokemons] = useState<IpokemonList>();
  //fetching pokemon data
  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPokemons(data);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  //to get url for details on click
  const handleClick = async (url: string) => {
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="container">
      <div className="buttons">
        <button
          onClick={() => {
            //if there is no click simply return else fetchData pokemons.next
            if (!pokemons?.next) return;
            fetchData(pokemons.next);
          }}
        >
          Next
        </button>
      </div>
      {pokemons?.results.map((pokemon) => {
        return (
          <PokemonData
            key={pokemon.name}
            pokemon={pokemon}
            onClick={handleClick}
          />
        );
      })}
    </main>
  );
};

export default App;