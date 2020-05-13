import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pokemon-arena';
  pokemons: Pokemon[] = [];
  ratata: Pokemon = null;
  pika: Pokemon = null;
  pikaInfo: string = null;
  ratataInfo: string = null;
  round = 'Round 1';
  tourDe = 'ratata';
  messages = '';

  constructor() {

    this.ratata = new Pokemon('ratata', 100, 20, 20);
    this.pika = new Pokemon('pika', 100, 20, 20);
    this.pikaInfo = this.pika.showPokemon();
    this.ratataInfo = this.ratata.showPokemon();

    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {
          this.messages = this.ratata.attackPokemon(this.pika);
          this.tourDe = 'pika';
        } else {
          this.messages = 'ratata est mort!';
          clearInterval(battle);
        }
      } else {
        if (this.pika.isDead() !== true) {
          this.messages = this.pika.attackPokemon(this.ratata);
          this.tourDe = 'ratata';
        } else {
          this.messages = 'pika est mort!';
          clearInterval(battle);
        }
      }

    }, 3000);

  }

}

