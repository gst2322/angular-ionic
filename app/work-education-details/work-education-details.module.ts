import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkEducationDetailsRoutingModule } from './work-education-details-routing.module';
import { WorkEducationDetailsComponent } from './work-education-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [WorkEducationDetailsComponent],
  imports: [
    CommonModule,
    WorkEducationDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmOqKhoPVQMG6qQ3Nl3LgWfkSXTqs846c',
      libraries: ['places']
    }),
    IonicModule
  ],
  exports: [WorkEducationDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkEducationDetailsModule {}
