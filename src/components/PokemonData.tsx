import React from "react";
import { IpokemonList } from "../Types/IpokemonList";

interface Iprops {
  //results values which is an array
  pokemon: IpokemonList["results"][0];
  onClick: () => void;
}

const PokemonData = ({ pokemon }: Iprops) => {
  return (
    <div className="poke-info">
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonData;
