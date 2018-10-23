import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancerDetailsPage } from './financer-details';

@NgModule({
  declarations: [
    FinancerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancerDetailsPage),
  ],
})
export class FinancerDetailsPageModule {}
