import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancerPage } from './financer';

@NgModule({
  declarations: [
    FinancerPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancerPage),
  ],
})
export class FinancerPageModule {}
