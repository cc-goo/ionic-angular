import { NewIncidentPage } from './new-incident/new-incident.page';

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { IncidentsPage } from './incidents.page';


const routes: Route[] = [
    {
        path: '',
        component: IncidentsPage/*,
        children: [
            {
                path: ':incidentId',
                loadChildren: './incidents/incident-detail/incident-detail.module#IncidentDetailPageModule'
            }
        ]*/
    },
    {
        path: 'new',
        component: NewIncidentPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncidentsRoutingModule {}