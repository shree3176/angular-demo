import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
