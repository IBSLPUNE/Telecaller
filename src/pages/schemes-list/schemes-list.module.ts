import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchemesListPage } from './schemes-list';

@NgModule({
  declarations: [
    SchemesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SchemesListPage),
  ],
})
export class SchemesListPageModule {}
