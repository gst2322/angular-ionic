import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { WorkEducationDetailsComponent } from './work-education-details.component';

const routes: Routes = [
  { path: 'www', component: WorkEducationDetailsComponent, data: { title: extract('Ionic-form') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkEducationDetailsRoutingModule {}
