import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  let { pokemonId } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonId]);

  const { name, abilities, height, weight, moves, stats, types } = pokemon;
  return (
    <div className="flex flex-col items-center">
      <img
        src={pokemon.sprites?.front_default}
        alt={name}
        className="w-32 h-32"
      />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2">Abilities</h3>
        <ul className="list-disc">
          {abilities?.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mb-2">Height</h3>
        <p>{height}</p>
        <h3 className="text-xl font-bold mb-2">Weight</h3>
        <p>{weight}</p>
        <h3 className="text-xl font-bold mb-2">Moves</h3>
        <ul className="list-disc">
          {moves?.slice(0, 5).map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mb-2">Stats</h3>
        <ul className="list-disc">
          {stats?.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name + ": " + stat.base_stat}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mb-2">Types</h3>
        <ul className="list-disc">
          {types?.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
