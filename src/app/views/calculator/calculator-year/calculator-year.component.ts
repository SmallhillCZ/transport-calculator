import { Component, OnInit, DoCheck } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-calculator-year',
  templateUrl: './calculator-year.component.html',
  styleUrls: ['./calculator-year.component.scss']
})
export class CalculatorYearComponent implements OnInit {

  currentYear = (new Date()).getFullYear();
  
  data = {
    yearKm: 10000,
    numRides: 20
  };
  
  calculators = [
    { type: "car" }, { type: "carsharing" }
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  ngDoCheck() {
    
  }
  

}
