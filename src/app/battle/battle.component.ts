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
  red: Pokemon;
  blue: Pokemon;
  isFighting: boolean;
  tourDe: string;
  logLines: LogLine[] = [];
  roundWinners = [];

  constructor(private pokemonService: PokemonService,
              private battleService: BattleService,
              private router: Router) { }

  ngOnInit(): void {
    if ( this.pokemonService.selectedPokemons.length < 2 ) {
      this.router.navigate(['/select']);
    }
    this.round = 1;
    this.red = this.pokemonService.selectedPokemons[0];
    this.blue = this.pokemonService.selectedPokemons[1];
  }

  gameOver(roundwinner: Array<string>): string {
    if (roundwinner.length === 3) {
      const game = new Game();
      return game.gameWinner(roundwinner[0], roundwinner[1], roundwinner[2]);
    }
  }

  startBattle() {
    this.pokemonService.getPokemonByNameFromApi(this.blue).subscribe(pokemon => {
      console.log(pokemon);
    });
    this.isFighting = true;

    this.tourDe = this.battleService.sortBySpeed(this.red, this.blue);
    this.logLines.push(new LogLine('Round ' + this.round, 'white', new Date()));
    this.logLines.push(new LogLine('Le combat commence !' + '\n' + this.tourDe + ' est le plus rapide!', 'white', new Date()));


    const battle = setInterval(() => {

      if (this.tourDe === 'red') {
        if (this.red.isDead() !== true) {

          this.logLines.push(new LogLine(this.red.attackPokemon(this.blue), 'red', new Date()));

          this.tourDe = 'blue';
        } else {
          this.logLines.push(new LogLine(this.ratata.name + ' est KO!', 'white', new Date()));
          this.roundWinners.push(this.pika.name);
          clearInterval(battle);
          this.resetRound();
        }
      } else {
        if (this.blue.isDead() !== true) {

          this.logLines.push(new LogLine(this.blue.attackPokemon(this.red), 'yellow', new Date()));

          this.tourDe = 'red';
        } else {
          this.logLines.push(new LogLine(this.pika.name + ' est KO!', 'white', new Date()));
          this.roundWinners.push(this.ratata.name);
          clearInterval(battle);
          this.resetRound();
        }
      }

      if (this.round === 4) {
        this.logLines.push(new LogLine(this.gameOver(this.roundWinners) + ' a gagné la game! ', 'blue', new Date()));
      }

    }, 1500);
  }

  resetRound() {
    this.red.hp = this.red.maxHp;
    this.blue.hp = this.blue.maxHp;
    this.isFighting = false;
    this.round++;
  }

  newBattle(): void {
    this.pokemonService.resetSelectedPokemons();
    this.router.navigate(['/select']);
  }
}
