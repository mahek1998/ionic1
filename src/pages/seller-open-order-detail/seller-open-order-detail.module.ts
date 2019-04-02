import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerOpenOrderDetailPage } from './seller-open-order-detail';

@NgModule({
  declarations: [
    SellerOpenOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerOpenOrderDetailPage),
  ],
})
export class SellerOpenOrderDetailPageModule {}
