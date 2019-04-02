import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerPaymentStatusPage } from './seller-payment-status';

@NgModule({
  declarations: [
    SellerPaymentStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerPaymentStatusPage),
  ],
})
export class SellerPaymentStatusPageModule {}
