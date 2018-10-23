import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEmployeePage } from './create-employee';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    CreateEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEmployeePage),
    DatePickerModule
  ],
})
export class CreateEmployeePageModule {}
