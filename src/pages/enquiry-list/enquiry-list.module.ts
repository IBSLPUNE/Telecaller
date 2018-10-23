import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryListPage } from './enquiry-list';

@NgModule({
  declarations: [
    EnquiryListPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryListPage),
  ],
})
export class EnquiryListPageModule {}
