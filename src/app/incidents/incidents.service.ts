import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private http: HttpClient) { }

  getIncidentLocations(){
    return  this.http.get('https://localhost:44364/api/incidents/location');
  }

  getIncidentSeverities(){
    return  this.http.get('https://localhost:44364/api/incidents/severity');
  }
}
