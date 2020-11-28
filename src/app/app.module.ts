import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './views/calculator/calculator.component';
import { CalculatorYearComponent } from './views/calculator/calculator-year/calculator-year.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarCalculatorComponent } from './calculators/car-calculator/car-calculator.component';
import { CarsharingCalculatorComponent } from './calculators/carsharing-calculator/carsharing-calculator.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorYearComponent,
    
    CarCalculatorComponent,
    CarsharingCalculatorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
