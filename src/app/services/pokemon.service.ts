import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { map } from "rxjs/operators";

interface RawPokemon {
  name: string,
  stats: Stat[],
  sprites: Sprite
}

interface Stat {
  base_stat: number,
  stat: StatData
}

interface StatData {
  name: string
}

interface Sprite {
  front_default: string
}

@Injectable()
export class PokemonService {

  urlApi = 'https://pokeapi.co/api/v2/pokemon/';  // URL de l'API
  selectedPokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getPokemonByNameFromApi(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.urlApi + pokemon.name);
  }

  getPokemonByIdFromApi(pokemonId: number): Observable<Pokemon> {
    return this.http.get<RawPokemon>(this.urlApi + pokemonId)
      .pipe(
        map((rawPokemon: RawPokemon): Pokemon => {
          console.log(rawPokemon);
          return new Pokemon(
            rawPokemon.name,
            this.findStat(rawPokemon, 'hp').base_stat,
            this.findStat(rawPokemon, 'attack').base_stat,
            this.findStat(rawPokemon, 'speed').base_stat,
            rawPokemon.sprites.front_default
          );
        })
      );
  }

  findStat(rawPokemon: RawPokemon, statName: string) {
    return rawPokemon.stats.find(stat => stat.stat.name === statName);
  }

  getSelectedPokemons(): Pokemon[] {
    return this.selectedPokemons;
  }

  addOneToSelection(pokemon: Pokemon): void {
    this.selectedPokemons.push(pokemon);
  }

  removeOneFromSelection(pokemon: Pokemon): void {
    for( let i = 0; i < this.selectedPokemons.length; i++ ) {
      if (pokemon.name === this.selectedPokemons[i].name ) {
        this.selectedPokemons.slice(i, 1);
        console.log('index : ', i);
      }
    }
  }

  resetSelectedPokemons(): void {
    this.selectedPokemons = [];
  }
}

