import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from "./battle/battle.component";


const routes: Routes = [
  { path: 'battle', component: BattleComponent },
  { path: '', component: BattleComponent },
  // { path: 'not-found', component: FourOhFourComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
