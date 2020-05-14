import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { BattleService } from './services/battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pokemon-arena';
  pokemons: Pokemon[] = [];
  ratata: Pokemon = null;
  pika: Pokemon = null;
  pikaInfo: string = null;
  ratataInfo: string = null;
  round = 'Round 1';
  tourDe = '';
  messages = '';
  isFighting = false;
  Round1: BattleService = null;
  Round2: BattleService = null;
  Round3: BattleService = null;

  constructor() { }

  ngOnInit(): void {
    this.ratata = new Pokemon('ratata', 100, 40, 20);
    this.pika = new Pokemon('pika', 100, 40, 20);
    this.pikaInfo = this.pika.showPokemon();
    this.ratataInfo = this.ratata.showPokemon();
    this.Round1 = new BattleService(this.pika, this.ratata);
  }

  startBattle() {
    this.isFighting = true;
    this.tourDe = this.Round1.sortBySpeed();
    this.messages = 'Le combat commence !' + '\n' + this.tourDe + ' est le plus rapide! ';


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

