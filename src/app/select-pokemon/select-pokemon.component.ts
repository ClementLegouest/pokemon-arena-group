import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.scss']
})
export class SelectPokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemons = this.pokemonService.pokemons;

    if ( this.pokemonService.pokemons.length === 0 ) {
      for ( let i = 1; i <= 9; i++) {
        this.pokemonService.getPokemonByIdFromApi(i)
          .subscribe((pokemon) => {
            this.pokemonService.addOnePokemon(pokemon);
            this.pokemons = this.pokemonService.pokemons;
          })
      }
    }
    console.log(this.pokemonService.pokemons);
  }

  addPokemonToSelection(pokemon: Pokemon): void {
    this.pokemonService.addOneToSelection(pokemon);
  }
}
