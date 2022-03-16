import React, { useEffect, useState } from "react";
import { IpokemonList } from "../Types/IpokemonList";

import "../styles/App.css";

const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const App = () => {
  const [pokemon, setPokemon] = useState<IpokemonList>();
  //fetching pokemon data
  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPokemon(data);
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <main className="container">
      <h3>Varun</h3>
    </main>
  );
};

export default App;
