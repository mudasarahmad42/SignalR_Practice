import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { ChartModel } from '../../../shared/interfaces/chart-model';

@Injectable()

export class SignalRService {

  constructor() { }

  public data: ChartModel[];

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {

    this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl('https://localhost:7217/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}
