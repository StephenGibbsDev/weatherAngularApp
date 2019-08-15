import { Component, OnInit } from '@angular/core';
import {WeatherDetailsService} from 'src/app/shared/weather-details.service'
import {WeatherDetails} from 'src/app/Shared/weather-details.model'

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weatherData:WeatherDetails
  constructor(private service: WeatherDetailsService) { }

  ngOnInit() {

    this.service.initWeatherData().subscribe((response:WeatherDetails) => 
    { 
      
    console.log('BELOW SHOULD BE POPULATED OBJECTTTT')
      this.weatherData = response; 
      console.log(this.weatherData);
    });

  }

}
