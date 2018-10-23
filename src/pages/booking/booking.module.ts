import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingPage } from './booking';
import { DatePickerModule } from 'ion-datepicker';

@NgModule({
  declarations: [
    BookingPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingPage),
     DatePickerModule
  ],
})
export class BookingPageModule {}
