import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from "./views/calculator/calculator.component";
import { CalculatorYearComponent } from "./views/calculator/calculator-year/calculator-year.component";

const routes: Routes = [
  {
    path: "", component: CalculatorComponent,
    children: [
      { path: "rok", component: CalculatorYearComponent }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
