import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryListDetailPage } from './enquiry-list-detail';

@NgModule({
  declarations: [
    EnquiryListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryListDetailPage),
  ],
})
export class EnquiryListDetailPageModule {}
