import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveChartsComponent } from './live-charts.component';

const routes: Routes = [{ path: '', component: LiveChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveChartsRoutingModule { }
