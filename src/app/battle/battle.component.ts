import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {LogLine} from "../models/log-line.model";
import {PokemonService} from "../services/pokemon.service";
import {BattleService} from "../services/battle.service";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  ratata: Pokemon;
  pika: Pokemon;
  isFighting: boolean;
  tourDe: string;
  Round1: BattleService;
  logLines: LogLine[] = [];
  messages: string;
  round: number = 1;

  constructor(private pokemonService: PokemonService,
              private battleService: BattleService) { }

  ngOnInit(): void {
    this.pokemonService.addOnePokemon(new Pokemon('ratata', 100, 40, 20));
    this.pokemonService.addOnePokemon(new Pokemon('pika', 100, 40, 20));
    this.ratata = new Pokemon('ratata', 100, 40, 20);
    this.pika = new Pokemon('pika', 100, 40, 20);
  }

  startBattle() {
    this.isFighting = true;

    this.tourDe = this.battleService.sortBySpeed(this.pika, this.ratata);
    this.logLines.push(new LogLine('Round ' + this.round, 'white', new Date()));
    this.logLines.push(new LogLine('Le combat commence !' + '\n' + this.tourDe + ' est le plus rapide!', 'white', new Date()));


    const battle = setInterval(() => {

      if (this.tourDe === 'ratata') {
        if (this.ratata.isDead() !== true) {

          this.messages = this.ratata.attackPokemon(this.pika);
          this.logLines.push(new LogLine(this.messages, 'red', new Date()));

          this.tourDe = 'pika';
        } else {

          this.messages = this.ratata.name + ' est ko!';
          this.logLines.push(new LogLine(this.messages, 'white', new Date()));

          clearInterval(battle);
          this.resetBattle();
        }
      } else {
        if (this.pika.isDead() !== true) {
          this.messages = this.pika.attackPokemon(this.ratata);
          this.logLines.push(new LogLine(this.messages, 'yellow', new Date()));

          this.tourDe = 'ratata';
        } else {

          this.messages = this.pika.name + ' est ko!';
          this.logLines.push(new LogLine(this.messages, 'white', new Date()));

          clearInterval(battle);
          this.resetBattle();
        }
      }

    }, 1500);
  }

  resetBattle(): void {
    this.isFighting = false;
    this.round++;
    this.ratata = new Pokemon('ratata', 100, 40, 20);
    this.pika = new Pokemon('pika', 100, 40, 20);
  }
}
