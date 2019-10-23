import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EatGoApiServiceService {
  API_KEY:string = 'AIzaSyCanIiqmWSJarc9Q1ngxvc0T-b-LG4D_N8'
  constructor(private httpClient: HttpClient) { }

  getRestaurant(){
    return this.httpClient.get<Config>(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=${this.API_KEY}`);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
