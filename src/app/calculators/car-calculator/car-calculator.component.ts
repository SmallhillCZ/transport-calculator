import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'car-calculator',
  templateUrl: './car-calculator.component.html',
  styleUrls: ['./car-calculator.component.scss']
})
export class CarCalculatorComponent implements OnInit {

  @Input() set data(data){
    this.calculate(data);
  }

  results = {
    km: 0,
    depreciationKm: 0,
    depreciationYear: 0,
    service: 0,
    toll: 1500,
    total: 0
  }
  
  currentYear = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
  }

  calculate(data) {
    this.results.km = data.yearKm * (data.car.consumption / 100) * data.gasPrice;
    this.results.depreciationYear = data.car.price * Math.pow((1 - 0.11),this.currentYear - data.car.year) - data.car.price * Math.pow((1 - 0.11),this.currentYear - data.car.year + 1);
    this.results.total = Object.entries(this.results).filter(car => car[0] !== "total").map(car => car[1]).reduce((acc,cur) => acc + cur,0);
  }

}
