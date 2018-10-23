import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancerListPage } from './financer-list';

@NgModule({
  declarations: [
    FinancerListPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancerListPage),
  ],
})
export class FinancerListPageModule {}
