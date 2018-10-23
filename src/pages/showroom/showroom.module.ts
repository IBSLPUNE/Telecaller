import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowroomPage } from './showroom';

@NgModule({
  declarations: [
    ShowroomPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowroomPage),
  ],
})
export class ShowroomPageModule {}
