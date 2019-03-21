import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  title = 'Shri angular 4 app';
  chart = [];
  other = [];
  constructor(private _weather: WeatherService) { }
  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {

        let wd: any = res;
        let year_dataset = [];
        let month_dataset = [];
        let value_dataset = [];

        for (let i = 0; i < wd.length; i++) {
          //value12 = res[i].year;
          year_dataset.push(res[i].year);
          month_dataset.push(res[i].month);
          value_dataset.push(res[i].value);
        };

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: year_dataset,
            datasets: [
              {
                data: value_dataset,
                borderColor: "#3cba9f",
                fill: true
              }
              ,
              {
                data: month_dataset,
                borderColor: "#ffcc00",
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

      })
  }


}
