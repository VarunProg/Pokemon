import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IPokemon } from "../Types/IpokemonDetails";

const PokemonDetails = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  // console.log("history state", location.state);
  const selectedPokemon = location.state as IPokemon;

  return (
    <div className="pokeDetails">
      <img
        width="200px"
        src={selectedPokemon.sprites.front_default}
        alt="pokemonImage"
      />
      {/* to get pokemon type */}
      <h3>{selectedPokemon.types[0].type.name}</h3>
      {/* to get pokemon stats */}
      {selectedPokemon.stats.map((stats, idx) => {
        return (
          <Fragment key={idx}>
            <h3>{stats.stat.name}</h3>
            <h3>{stats.effort}</h3>
          </Fragment>
        );
      })}
    </div>
  );
};

export default PokemonDetails;
