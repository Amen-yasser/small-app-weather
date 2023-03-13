import { Component, OnInit } from '@angular/core';
import { WeatherData } from './Models/weather_model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData?:WeatherData;
 
 constructor(private servise:WeatherService){}
  ngOnInit(): void {
    this.servise.getWeatherData('auckland').subscribe(res=>{
      this.weatherData=res;
      console.log(res);
    })
  }

}
