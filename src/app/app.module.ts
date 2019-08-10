import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule} from 'ngx-bootstrap';
import { AngularFontAwesomeModule} from "angular-font-awesome";
 
import { AppComponent } from './app.component';
import { WeatherLandingComponent } from './weather-landing/weather-landing.component';
import { WeatherHeaderComponent } from './weather-landing/weather-header/weather-header.component';
import { WeatherDetailsComponent } from './weather-landing/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherLandingComponent,
    WeatherHeaderComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
