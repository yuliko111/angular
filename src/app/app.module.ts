import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FilterHotelsPipe } from './common/filter-hotels.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    WeatherComponent,
    HotelsComponent,
    FilterHotelsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
