import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {LogLine} from "../models/log-line.model";
import {PokemonService} from "../services/pokemon.service";
import {BattleService} from "../services/battle.service";
import {Router} from "@angular/router";

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

          this.logLines.push(new LogLine(this.red.name + ' est KO!', 'white', new Date()));

          clearInterval(battle);
          this.resetRound();
        }
      } else {
        if (this.blue.isDead() !== true) {

          this.logLines.push(new LogLine(this.blue.attackPokemon(this.red), 'yellow', new Date()));

          this.tourDe = 'red';
        } else {

          this.logLines.push(new LogLine(this.blue.name + ' est mort!', 'white', new Date()));

          clearInterval(battle);
          this.resetRound();
        }
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
