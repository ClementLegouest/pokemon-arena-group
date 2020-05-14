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

  sortBySpeed() {
    if (this.red.speed > this.blue.speed) {
      return this.red.name;
    } else if (this.red.speed === this.blue.speed) {
      const aleatoire = [this.red.name, this.blue.name];
      const nomber = this.getRandomInt(2);
      return aleatoire[nomber];
    } else {
      return this.blue.name;
    }
  }

  battle(pokemons: Pokemon[]) {

    // this.sortBySpeed(pokemons);

    setInterval(function() {

      pokemons[0].attackPokemon(pokemons[1]);
      pokemons[1].attackPokemon(pokemons[0]);
      this.tourDe = 'ratata';

    }, 3000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
