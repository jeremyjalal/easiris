import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeFirstConnectionComponent } from './home-first-connection/home-first-connection.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';

@NgModule({
  declarations: [HomeFirstConnectionComponent, HomeSummaryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
