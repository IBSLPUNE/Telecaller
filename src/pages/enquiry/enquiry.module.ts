import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryPage } from './enquiry';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    EnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryPage),
    DatePickerModule
  ],
})
export class EnquiryPageModule {}
