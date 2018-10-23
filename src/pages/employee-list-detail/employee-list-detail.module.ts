import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeListDetailPage } from './employee-list-detail';

@NgModule({
  declarations: [
    EmployeeListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeListDetailPage),
  ],
})
export class EmployeeListDetailPageModule {}
