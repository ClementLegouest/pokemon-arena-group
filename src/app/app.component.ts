import { Component } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-arena';
  ratata: Pokemon = new Pokemon('ratata', 100, 20, 20);
  pika: Pokemon = new Pokemon('pika', 100, 20, 20);
  pikaInfo = this.pika.showPokemon();
  ratataInfo = this.ratata.showPokemon();
  round = 'Round 1';
  tourDe = 'ratata';
  messages = '';
  constructor() {

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

