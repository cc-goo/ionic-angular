import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentsPage } from './incidents.page';
import { IncidentsRoutingModule } from './incidents-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentsRoutingModule
  ],
  declarations: [IncidentsPage]
})
export class IncidentsPageModule {}
