import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEnquiryListPage } from './admin-enquiry-list';

@NgModule({
  declarations: [
    AdminEnquiryListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEnquiryListPage),
  ],
})
export class AdminEnquiryListPageModule {}
