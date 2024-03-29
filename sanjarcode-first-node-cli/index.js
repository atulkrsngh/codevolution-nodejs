#!/usr/bin/env node // this is to tell operating system which interpreter to use, node in this case which is installed at path /usr/bin/env

const inquirer = require("inquirer");

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

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves",
  },
]).then((answerObj) => {
  const pokemonName = answerObj.pokemon;
  printFiveMoves(pokemonName);
});