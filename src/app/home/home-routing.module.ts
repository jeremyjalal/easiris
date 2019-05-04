import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFirstConnectionComponent } from './home-first-connection/home-first-connection.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';

const routes: Routes = [
  {path: 'home', component: HomeFirstConnectionComponent},
  {path: 'home/summary', component: HomeSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
