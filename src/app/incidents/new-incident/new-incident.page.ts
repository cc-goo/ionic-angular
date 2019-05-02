import { Severity } from './../models/severity.model';
import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../incidents.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.page.html',
  styleUrls: ['./new-incident.page.scss'],
})
export class NewIncidentPage implements OnInit {
  public LocationList: Location[];
  public SeverityList: Severity[];
  constructor(private incidentsService: IncidentsService) { }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.incidentsService.getIncidentLocations().subscribe(
      (value: Location[]) => this.LocationList = [...value]
    );

    this.incidentsService.getIncidentSeverities().subscribe(
      (value: Severity[]) => this.SeverityList = [...value]
    );
  }

  onImagePicked(imageData: string) {

  }
}
