import { Component, OnInit } from '@angular/core';
import {WeatherDetailsService} from 'src/app/shared/weather-details.service'
import {WeatherDetails} from 'src/app/Shared/weather-details.model'

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.css']
})
export class WeatherHeaderComponent implements OnInit {
  weatherData:WeatherDetails


  constructor(private service: WeatherDetailsService) { }

  ngOnInit() {
    // this.resetForm();
    //this.service.refreshList();
    //
    //
    //console.log("Ran refresh List: WeatherDataBelow")
    //console.log(this.service.weatherData)
    this.service.initWeatherData().subscribe((response:WeatherDetails) => 
    { 
      
    console.log('BELOW SHOULD BE POPULATED OBJECTTTT')
      this.weatherData = response; 
      console.log(this.weatherData);
    });

    //console.log(this.weatherData);
  }

  // resetForm(form?: NgForm){
    
  //   if(form!=null)
  //     form.resetForm();
  //   this.service.weatherData={
  //     coord:
  //   }

    
  // }

  populateForm(wd:WeatherDetails){
    console.log("Run populateForm")
    this.service.weatherData = Object.assign({},wd);
  }

}
