import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  pokemons: Pokemon[] = [];
  twoPokemonsSelected: boolean;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.twoPokemonsSelected = false;

    for ( let i = 1; i <= 9; i++) {
      this.pokemonService.getPokemonByIdFromApi(i)
        .subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        })
    }
  }

  selectPokemon(pokemon: Pokemon, index: number): void {
    if ( pokemon.isSelected ) {
      pokemon.isSelected = false;

    }
    else if ( !(this.pokemonService.selectedPokemons.length >= 2) ) {
      this.pokemons[index].isSelected = true;
      this.pokemonService.addOneToSelection(pokemon);
    }
    console.log(this.pokemonService.selectedPokemons);
  }

  areTwoSelected(): boolean {
    return this.pokemonService.selectedPokemons.length >= 2;
  }
}
