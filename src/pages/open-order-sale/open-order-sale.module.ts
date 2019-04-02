import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenOrderSalePage } from './open-order-sale';

@NgModule({
  declarations: [
    OpenOrderSalePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenOrderSalePage),
  ],
})
export class OpenOrderSalePageModule {}
