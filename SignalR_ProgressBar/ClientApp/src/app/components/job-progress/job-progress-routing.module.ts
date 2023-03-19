import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobProgressComponent } from './job-progress.component';

const routes: Routes = [{ path: '', component: JobProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobProgressRoutingModule { }
