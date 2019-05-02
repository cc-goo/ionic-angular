import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'incidents', loadChildren: './incidents/incidents.module#IncidentsPageModule' },
  { path: 'new-incident', loadChildren: './incidents/new-incident/new-incident.module#NewIncidentPageModule' },
  { path: 'incident-detail', loadChildren: './incidents/incident-detail/incident-detail.module#IncidentDetailPageModule' },
  { path: 'incident-list', loadChildren: './incidents/incident-list/incident-list.module#IncidentListPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
