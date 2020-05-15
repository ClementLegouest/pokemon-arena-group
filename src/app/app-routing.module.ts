import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from "./battle/battle.component";
import { SelectComponent } from "./select/select.component";


const routes: Routes = [
  { path: 'battle', component: BattleComponent },
  { path: 'select', component: SelectComponent },
  { path: '', component: SelectComponent },
  // { path: 'not-found', component: FourOhFourComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
