import React from "react";
import { IpokemonList } from "../Types/IpokemonList";

interface Iprops {
  //results values which is an array
  pokemon: IpokemonList["results"][0];
  onClick: (url: string) => void;
}

const PokemonData = ({ pokemon, onClick }: Iprops) => {
  return (
    <div className="poke-info">
      {/* on onClick event passed pokemon.url and recieved as a parameter */}
      <h3
        onClick={() => {
          onClick(pokemon.url);
        }}
      >
        {pokemon.name}
      </h3>
    </div>
  );
};

export default PokemonData;
