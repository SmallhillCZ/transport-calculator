import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carsharing-calculator',
  templateUrl: './carsharing-calculator.component.html',
  styleUrls: ['./carsharing-calculator.component.scss']
})
export class CarsharingCalculatorComponent implements OnInit {

  @Input() set data(data){
    this.calculate(data);
  }
  
  results = {
    km: 0,
    time: 0,
    total: 0
  }
  
  prices = {
    car4way: {
      km: 5,
      minute: 6,
      hour: 59
    }
  };

  constructor() { }

  ngOnInit() {
  }

  calculate(data){

    switch(data.carsharing.company) {
      case "car4way":
        this.results.km = data.yearKm * this.prices.car4way.km;
        const totalTime = data.yearKm / data.avgSpeed;
        const minuteTime = Math.min(totalTime,data.numRides * 0.5);
        this.results.time = minuteTime * 60 * this.prices.car4way.minute + (totalTime - minuteTime) * this.prices.car4way.hour;
        break;
    }

    this.results.total = Object.entries(this.results).filter(car => car[0] !== "total").map(car => car[1]).reduce((acc,cur) => acc + cur,0);
  }

}
