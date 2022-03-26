import React, { useEffect, useState, useRef } from "react";
import "../styles/App.css";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { IpokemonList } from "../Types/IpokemonList";
import { IPokemon } from "../Types/IpokemonDetails";

import PokemonData from "./PokemonData";
import PokemonDetails from "./PokemonDetails";

// const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const url = "https://pokeapi.co/api/v2/pokemon";
const App = () => {
  const [pokemons, setPokemons] = useState<IpokemonList>();

  //to hold the records, taking refernce
  const savedPokemons = useRef<Record<string, IPokemon>>({});
  console.log(savedPokemons, "useref");

  // useNavigate used for links
  const navigate = useNavigate();

  //fetching pokemon data
  const fetchData = async (url: string) => {
    const res = await fetch(`${url}?limit=20`);
    const data = await res.json();
    console.log(data);
    setPokemons(data);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchSelectedPokemon = async (id: string): Promise<IPokemon> => {
    //check if data is already fetched(saved in useRef) then return
    const storedPoke = savedPokemons.current[id];
    if (storedPoke) return storedPoke;
    // if data is not fecthed then fetch and saved to useRef,   concate id and url
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    savedPokemons.current[id] = data;
    return data;
  };

  //to get url details on onClick pokemon
  const handleClick = async (id: string, isHover?: boolean) => {
    const pokemon = await fetchSelectedPokemon(id);
    if (isHover) {
      return;
    }
    //naviagting router and sending pokemon state to PokemonDetails
    navigate(`/pokemon/${id}`, { state: pokemon });
  };
  const Home = () => {
    return (
      <>
        <div className="buttons">
          {/* if previous value is fales then button disabled and if pokemons.previous not selected simple retun else call pokemons.previous */}
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
        <div className="container">
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

          <Outlet />
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="pokemon/:id" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
