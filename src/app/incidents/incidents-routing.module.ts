import { IncidentsPageModule } from './incidents.module';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { IncidentsPage } from './incidents.page';
import { IncidentDetailPage } from './incident-detail/incident-detail.page';

const routes: Route[] = [
    {
        path: '',
        component: IncidentsPage,
        children: [
            {
                path: ':incidentId',
                loadChildren: './incidents/incident-detail/incident-detail.module#IncidentDetailPageModule'
            }
        ]
    },
  { path: 'new-incident', loadChildren: './new-incident/new-incident.module#NewIncidentPageModule' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncidentsRoutingModule {}