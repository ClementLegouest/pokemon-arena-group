import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../models/pokemon.model";
import { LogLine } from "../models/log-line.model";
import { PokemonService } from "../services/pokemon.service";
import { BattleService } from "../services/battle.service";
import { Game } from '../services/game';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  round: number;
  pika: Pokemon;
  ratata: Pokemon;
  isFighting: boolean;
  tourDe: string;
  logLines: LogLine[] = [];
  roundWinners = [];

  constructor(private pokemonService: PokemonService, private battleService: BattleService) { }

  ngOnInit(): void {
    this.round = 1;
    this.ratata = new Pokemon('ratata', 100, 40, 20, 'test');
    this.pika = new Pokemon('pikachu', 100, 40, 20, 'test');
  }

  gameOver(roundwinner: Array<string>): string {
    if (roundwinner.length === 3) {
      const game = new Game();
      return game.gameWinner(roundwinner[0], roundwinner[1], roundwinner[2]);
    }
  }

  startBattle() {
    this.pokemonService.getPokemonByNameFromApi(this.pika).subscribe(pokemon => {
      console.log(pokemon);
    });
    this.ratata = new Pokemon('ratata', 100, 40, 20, 'test');
    this.pika = new Pokemon('pika', 100, 40, 20, 'test');
    this.isFighting = true;

    this.tourDe = this.battleService.sortBySpeed(this.ratata, this.pika);
    this.logLines.push(new LogLine('Round ' + this.round, 'white', new Date()));
    this.logLines.push(new LogLine('Le combat commence !' + '\n' + this.tourDe + ' est le plus rapide!', 'white', new Date()));


    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {

          this.logLines.push(new LogLine(this.ratata.attackPokemon(this.pika), 'red', new Date()));

          this.tourDe = 'pika';
        } else {
          this.logLines.push(new LogLine(this.ratata.name + ' est KO!', 'white', new Date()));
          this.roundWinners.push(this.pika.name);
          clearInterval(battle);
          this.isFighting = false;
          this.round++;
        }
      } else {
        if (this.pika.isDead() !== true) {

          this.logLines.push(new LogLine(this.pika.attackPokemon(this.ratata), 'yellow', new Date()));

          this.tourDe = 'ratata';
        } else {
          this.logLines.push(new LogLine(this.pika.name + ' est KO!', 'white', new Date()));
          this.roundWinners.push(this.ratata.name);
          clearInterval(battle);
          this.isFighting = false;
          this.round++;
        }
      }

      if (this.round === 4) {
        this.logLines.push(new LogLine(this.gameOver(this.roundWinners) + ' a gagné la game! ', 'blue', new Date()));
      }

    }, 1500);
  }


}
