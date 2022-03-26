import React from "react";
import { IpokemonList } from "../Types/IpokemonList";
interface Iprops {
  //results values which is an array
  pokemon: IpokemonList["results"][0];
  onClick: (id: string, isHover?: boolean) => void;
}

const PokemonData = ({ pokemon, onClick }: Iprops) => {
  const id = pokemon.url.split("/").at(-2);
  return (
    <div className="poke-data">
      {/* <Link to={`pokemon/${id}`} state={pokemon}> */}
      <h3>{id}</h3>
      {/* on onClick event passed pokemon.url on onClick function and recieved as a parameter */}
      <h3
        onClick={() => {
          if (!id) return;
          onClick(id);
        }}
        //to fetch on hover
        onMouseOver={() => {
          if (!id) return;
          onClick(id, true);
        }}
      >
        {pokemon.name}
      </h3>
      {/* </Link> */}
    </div>
  );
};

export default PokemonData;
