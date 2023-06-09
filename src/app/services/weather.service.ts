import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../Models/weather_model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(CityName:string):Observable<WeatherData>
  {
    return this.http.get<WeatherData>(environment.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeadername, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeadername, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', CityName)
        .set('units', 'standard')
        .set('mode', 'json')
    });
  }
}
