import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchemesListDetailPage } from './schemes-list-detail';

@NgModule({
  declarations: [
    SchemesListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SchemesListDetailPage),
  ],
})
export class SchemesListDetailPageModule {}
