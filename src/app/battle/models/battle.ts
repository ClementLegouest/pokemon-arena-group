import Pokemon from './mockPokemon.model';

export class Battle {

  pokemons: Pokemon[] = [];
  red: Pokemon = null;
  blue: Pokemon = null;

  constructor(red: Pokemon, blue: Pokemon) {
    this.red = red;
    this.blue = blue;
    this.pokemons.push(red);
    this.pokemons.push(blue);
  }

  getInitiative(pokemons: Pokemon[]): number {
    return ( pokemons[0].speed >= pokemons[1].speed ? 0 : 1 );
  }
}
