import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-live-charts',
  templateUrl: './live-charts.component.html',
  styleUrls: ['./live-charts.component.scss']
})
export class LiveChartsComponent {
  constructor(public signalRService: SignalRService, private http: HttpClient) { }


  // Chart Configurations
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time data for the chart'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  errorMessage: string;

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.getChartData();
  }

  public getChartData = () => {
    this.http.get('https://localhost:7217/api/charts')
      .subscribe(res => {
        console.log("Charts Data from SignalR" + res);
      }, (error) => {
        this.errorMessage = error.message;
      })
  }
}
