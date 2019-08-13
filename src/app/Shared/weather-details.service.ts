
import { Injectable } from '@angular/core';
import {WeatherDetails  } from './weather-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class WeatherDetailsService {
    weatherData:WeatherDetails
    readonly rootUrl='https://api.openweathermap.org/data/2.5/weather?q=London&APPID=24d03c65a6ba3dee0c7b8358a1ae0469&units=metric'
    //list:Weather[];
    

    constructor(private http:HttpClient){}

    initWeatherData(){
        return this.http.get(this.rootUrl);
    }

    refreshList(){
        //this.http.get(this.rootUrl)
        //.toPromise()
        //.then(res=>res as WeatherDetails)

        //return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=24d03c65a6ba3dee0c7b8358a1ae0469").toPromise()
        //.then((response) => { 
        //console.log(response)

        this.http.get<WeatherDetails>('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=24d03c65a6ba3dee0c7b8358a1ae0469&units=metric')
        .subscribe((response:WeatherDetails) => 
              { 
                //console.log(response);
                this.weatherData = response; 
                console.log(this.weatherData);
                return  this.weatherData;
              });

              return this.weatherData;

        
    }
}
