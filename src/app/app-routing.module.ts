import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from "./battle/battle.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {SelectPokemonComponent} from "./select-pokemon/select-pokemon.component";


const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'select', component: SelectPokemonComponent},
  { path: 'battle', component: BattleComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
