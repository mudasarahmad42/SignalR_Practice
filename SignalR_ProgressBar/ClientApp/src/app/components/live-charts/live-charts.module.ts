import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveChartsRoutingModule } from './live-charts-routing.module';
import { LiveChartsComponent } from './live-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { SignalRService } from './services/signal-r.service';

@NgModule({
  declarations: [
    LiveChartsComponent
  ],
  imports: [
    CommonModule,
    LiveChartsRoutingModule,
    NgChartsModule
  ],
  providers: [SignalRService]
})
export class LiveChartsModule { }
