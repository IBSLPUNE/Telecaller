import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchemesPage } from './schemes';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    SchemesPage,
  ],
  imports: [
    IonicPageModule.forChild(SchemesPage),
    DatePickerModule
  ],
})
export class SchemesPageModule {}
