import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerProductInventoryPage } from './seller-product-inventory';

@NgModule({
  declarations: [
    SellerProductInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerProductInventoryPage),
  ],
})
export class SellerProductInventoryPageModule {}
