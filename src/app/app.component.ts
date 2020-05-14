import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { LogLine } from "./models/log-line.model";
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
  logLines: LogLine[] = [];

  constructor() {}

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
    this.logLines.push(new LogLine(this.messages, 'white'));


    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {

          this.messages = this.ratata.attackPokemon(this.pika);
          this.logLines.push(new LogLine(this.messages, 'red'));

          this.pikaInfo = this.pika.showPokemon();
          this.tourDe = 'pika';
        } else {

          this.messages = this.ratata.name + ' est mort!';
          this.logLines.push(new LogLine(this.messages, 'white'));

          clearInterval(battle);
          this.isFighting = false;
        }
      } else {
        if (this.pika.isDead() !== true) {
          this.messages = this.pika.attackPokemon(this.ratata);
          this.logLines.push(new LogLine(this.messages, 'yellow'));

          this.ratataInfo = this.ratata.showPokemon();
          this.tourDe = 'ratata';
        } else {

          this.messages = this.pika.name + ' est mort!';
          this.logLines.push(new LogLine(this.messages, 'white'));

          clearInterval(battle);
          this.isFighting = false;
        }
      }

    }, 3000);
  }
}
