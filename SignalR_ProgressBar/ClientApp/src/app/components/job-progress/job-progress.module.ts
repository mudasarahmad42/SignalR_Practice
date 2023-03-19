import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobProgressRoutingModule } from './job-progress-routing.module';
import { JobProgressComponent } from './job-progress.component';


@NgModule({
  declarations: [
    JobProgressComponent
  ],
  imports: [
    CommonModule,
    JobProgressRoutingModule
  ]
})
export class JobProgressModule { }
