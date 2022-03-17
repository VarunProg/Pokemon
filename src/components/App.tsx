import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { IpokemonList } from "../Types/IpokemonList";
import { IPokemon } from "../Types/IpokemonDetails";

import "../styles/App.css";
import PokemonData from "./PokemonData";
import PokemonDetails from "./PokemonDetails";

const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const App = () => {
  const [pokemons, setPokemons] = useState<IpokemonList>();
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();
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
    setSelectedPokemon(data);
    console.log(data);
  };
  // const Home = () => {
  //   return (
  //     <div>
  //       <div className="buttons">
  //         <button
  //           onClick={() => {
  //             //if there is no click simply return else fetchData pokemons.next
  //             if (!pokemons?.next) return;
  //             fetchData(pokemons.next);
  //           }}
  //         >
  //           Next
  //         </button>
  //       </div>
  //       <div className="poke-info">
  //         <div className="left-content">
  //           {pokemons?.results.map((pokemon) => {
  //             return (
  //               <PokemonData
  //                 key={pokemon.name}
  //                 pokemon={pokemon}
  //                 onClick={handleClick}
  //               />
  //             );
  //           })}
  //         </div>
  //         <Outlet />
  //         {/* <div className="right-content">
  //         {selectedPokemon ? (
  //           <PokemonDetails selectedPokemon={selectedPokemon} />
  //         ) : (
  //           <h3>Select PokeMon Name to get it's details</h3>
  //         )}
  //       </div> */}
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <main className="container">
      <div className="buttons">
        {/* if previous value is fales then button disabled and if pokemons.previous not selected simpl retun else call pokemons.previous */}
        <button
          disabled={pokemons?.previous ? false : true}
          onClick={() => {
            if (!pokemons?.previous) return;
            fetchData(pokemons.previous);
          }}
        >
          Previous
        </button>
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
      <div className="poke-info">
        <div className="left-content">
          {pokemons?.results.map((pokemon) => {
            return (
              <PokemonData
                key={pokemon.name}
                pokemon={pokemon}
                onClick={handleClick}
              />
            );
          })}
        </div>
        <div className="right-content">
          {selectedPokemon ? (
            <PokemonDetails selectedPokemon={selectedPokemon} />
          ) : (
            <h3>Select PokeMon Name to get pokemon details</h3>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
