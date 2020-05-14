import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Component, OnInit, Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {

    urlApi = 'https://pokeapi.co/api/v2/pokemon/';  // URL de l'API

    constructor(private http: HttpClient) { }

    getPokemonByNameFromApi(pokemon: Pokemon): Observable<Pokemon> {

        return this.http.get<Pokemon>(this.urlApi + pokemon.name);

    }

    getPokemonByIdFromApi(pokemonId: number): Observable<Pokemon> {

        return this.http.get<Pokemon>(this.urlApi + pokemonId );

    }

}

