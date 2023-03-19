import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'job-progress', loadChildren: () => import('./components/job-progress/job-progress.module').then(m => m.JobProgressModule) },
  { path: 'live-charts', loadChildren: () => import('./components/live-charts/live-charts.module').then(m => m.LiveChartsModule) },
  { path: '', pathMatch: 'full', component: DashboardComponent }, // redirect to `Dashboard`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
