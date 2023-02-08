#!/usr/bin/env node

const yargs = require("yargs");
const myOptions = yargs(process.argv).argv;

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (!response.ok) {
    console.log(response.statusText);
    return;
  }

  const pokemon = await response.json();

  const moves = pokemon?.moves.map(({ move }) => move.name);

  console.log(moves.slice(0, 5));
};

const pokemonName = myOptions.pokemon;
printFiveMoves(pokemonName);
