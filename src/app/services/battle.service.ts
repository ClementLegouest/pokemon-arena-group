import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  pokemons: Pokemon[] = [];
  red: Pokemon = null;
  blue: Pokemon = null;

  constructor(red: Pokemon, blue: Pokemon) {
    this.red = red;
    this.blue = blue;
    this.pokemons.push(red);
    this.pokemons.push(blue);
  }

  sortBySpeed(pokemons: Pokemon[]) {
    pokemons.sort((a, b) => (a.speed > b.speed) ? 1 : -1);
  }

  battle(pokemons: Pokemon[]) {
  }
}
