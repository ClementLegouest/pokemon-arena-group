import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { LogLine } from "./models/log-line.model";
import { BattleService } from './services/battle.service';
import { PokemonService } from './services/pokemon.service';

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
  round: number = 1;
  tourDe = '';
  messages = '';
  isFighting = false;
  Round1: BattleService = null;
  Round2: BattleService = null;
  Round3: BattleService = null;
  logLines: LogLine[] = [];

  constructor(public pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.ratata = new Pokemon('ratata', 100, 40, 20, 'test');
    this.pika = new Pokemon('pikachu', 100, 40, 20, 'test');
    this.pikaInfo = this.pika.showPokemon();
    this.ratataInfo = this.ratata.showPokemon();
    this.Round1 = new BattleService(this.pika, this.ratata);
  }

  startBattle() {
    this.pokemonService.getPokemonByNameFromApi(this.pika).subscribe(pokemon => {
      console.log(pokemon);
    });
    this.ratata = new Pokemon('ratata', 100, 40, 20,'test');
    this.pika = new Pokemon('pika', 100, 40, 20, 'test');
    this.isFighting = true;

    this.tourDe = this.Round1.sortBySpeed();
    this.logLines.push(new LogLine('Round ' + this.round, 'white', new Date()));
    this.logLines.push(new LogLine('Le combat commence !' + '\n' + this.tourDe + ' est le plus rapide!', 'white', new Date()));


    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {

          this.messages = this.ratata.attackPokemon(this.pika);
          this.logLines.push(new LogLine(this.messages, 'red', new Date()));

          this.pikaInfo = this.pika.showPokemon();
          this.tourDe = 'pika';
        } else {

          this.messages = this.ratata.name + ' est mort!';
          this.logLines.push(new LogLine(this.messages, 'white', new Date()));

          clearInterval(battle);
          this.isFighting = false;
          this.round++;
        }
      } else {
        if (this.pika.isDead() !== true) {
          this.messages = this.pika.attackPokemon(this.ratata);
          this.logLines.push(new LogLine(this.messages, 'yellow', new Date()));

          this.ratataInfo = this.ratata.showPokemon();
          this.tourDe = 'ratata';
        } else {

          this.messages = this.pika.name + ' est mort!';
          this.logLines.push(new LogLine(this.messages, 'white', new Date()));

          clearInterval(battle);
          this.isFighting = false;
          this.round++;
        }
      }

    }, 1500);
  }
}
