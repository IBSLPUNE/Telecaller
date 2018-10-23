import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowroomListPage } from './showroom-list';

@NgModule({
  declarations: [
    ShowroomListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowroomListPage),
  ],
})
export class ShowroomListPageModule {}
