import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminBookingListPage } from './admin-booking-list';

@NgModule({
  declarations: [
    AdminBookingListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminBookingListPage),
  ],
})
export class AdminBookingListPageModule {}
