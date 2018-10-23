import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowroomDetailPage } from './showroom-detail';

@NgModule({
  declarations: [
    ShowroomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowroomDetailPage),
  ],
})
export class ShowroomDetailPageModule {}
