import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import {BattleService} from './services/battle.service';
import { PokemonService } from './services/pokemon.service';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BattleService,
    PokemonService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
