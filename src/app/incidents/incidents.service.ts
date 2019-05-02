import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private http: HttpClient) { }

  getIncidentLocations(){
    return  this.http.get('https://hsseproto.free.beeceptor.com/incident/location');
  }

  getIncidentSeverities(){
    return  this.http.get('https://hsseproto.free.beeceptor.com/incident/severity');
  }
}
