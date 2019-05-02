import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private http: HttpClient) { }

  getIncidentLocations() {
    return  this.http.get('https://ionic-hssepro.firebaseio.com/locations.json');
  }

  getIncidentSeverities() {
    return  this.http.get('https://ionic-hssepro.firebaseio.com/severities.json');
  }
}
