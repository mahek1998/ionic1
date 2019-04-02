import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerProductInventoryDetailPage } from './seller-product-inventory-detail';

@NgModule({
  declarations: [
    SellerProductInventoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerProductInventoryDetailPage),
  ],
})
export class SellerProductInventoryDetailPageModule {}
