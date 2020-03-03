import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopRatedComponent} from "./top-rated/top-rated.component";


const routes: Routes = [
  { path:'', component: TopRatedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
