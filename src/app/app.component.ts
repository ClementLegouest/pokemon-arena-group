import {Component, OnInit} from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'pokemon-arena';
  pokemons: Pokemon[] = [];
  ratata: Pokemon = null;
  pika: Pokemon = null;
  pikaInfo: string = null;
  ratataInfo: string = null;
  round = 'Round 1';
  tourDe = 'ratata';
  messages = '';
  isFighting: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.ratata = new Pokemon('ratata', 100, 20, 20);
    this.pika = new Pokemon('pika', 100, 20, 20);
    this.pikaInfo = this.pika.showPokemon();
    this.ratataInfo = this.ratata.showPokemon();
  }

  startBattle() {
    this.isFighting = true;
    this.messages = 'Le combat commence !';
    this.ratata = new Pokemon('ratata', 100, 20, 20);
    this.pika = new Pokemon('pika', 100, 20, 20);

    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {
          this.messages = this.messages + '\n' + this.ratata.attackPokemon(this.pika);
          this.pikaInfo = this.pika.showPokemon();
          this.tourDe = 'pika';
        } else {
          this.messages = this.messages + '\n' + 'ratata est mort!';
          clearInterval(battle);
          this.isFighting = false;
        }
      } else {
        if (this.pika.isDead() !== true) {
          this.messages = this.messages + '\n' + this.pika.attackPokemon(this.ratata);
          this.ratataInfo = this.ratata.showPokemon();
          this.tourDe = 'ratata';
        } else {
          this.messages = this.messages + '\n' + 'pika est mort!';
          clearInterval(battle);
          this.isFighting = false;
        }
      }

    }, 3000);
  }
}

