import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentsPage } from './incidents.page';
import { IncidentsRoutingModule } from './incidents-routing.module';
import { NewIncidentPageModule } from './new-incident/new-incident.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentsRoutingModule,
    NewIncidentPageModule
  ],
  declarations: [IncidentsPage]
})
export class IncidentsPageModule {}
