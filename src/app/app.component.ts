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

    setInterval(function() {

      if (this.tourDe === 'ratata') {
        this.messages = this.ratata.attackPokemon(this.pika);
        this.tourDe = 'pika';
      } else {
        this.messages = this.pika.attackPokemon(this.ratata);
        this.tourDe = 'ratata';
      }

    }, 3000);

  }

}

