import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() {}

  sortBySpeed(red: Pokemon, blue: Pokemon) {
    if (red.speed > blue.speed) {
      return red.name;
    } else if (red.speed === blue.speed) {
      const aleatoire = [red.name, blue.name];
      const nomber = this.getRandomInt(2);
      return aleatoire[nomber];
    } else {
      return blue.name;
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

  fightWinner(red: Pokemon, blue: Pokemon) {
    if (blue.hp <= 0) {
      return red.name;
    } else if (red.hp <= 0) {
      return blue.name;
    } else {
      return 'Combat en cours';
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
