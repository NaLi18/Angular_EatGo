import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EatGoApiServiceService {
  API_KEY:string = "AIzaSyCl1Brlbq3IB2bq5WLX0X7iVMUpG7rLHvg"
  constructor(private httpClient: HttpClient) { }

  public getRestaurant(){
    return this.httpClient.get<Config>(`https://eatgoapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.API_KEY}`);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
