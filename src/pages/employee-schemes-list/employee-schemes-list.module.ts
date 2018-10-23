import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeSchemesListPage } from './employee-schemes-list';

@NgModule({
  declarations: [
    EmployeeSchemesListPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeSchemesListPage),
  ],
})
export class EmployeeSchemesListPageModule {}
