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
      {/* to get numbers by splitting the url */}
      <h3>{pokemon.url.split("/").at(-2)}</h3>
      {/* on onClick event passed pokemon.url in onClick function and recieved as a parameter */}
      <h3
        onClick={() => {
          onClick(pokemon.url);
        }}
      >
        {pokemon.name}
      </h3>
      {console.log(pokemon.url)}
    </div>
  );
};

export default PokemonData;
