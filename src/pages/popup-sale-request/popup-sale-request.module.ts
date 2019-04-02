import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupSaleRequestPage } from './popup-sale-request';

@NgModule({
  declarations: [
    PopupSaleRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupSaleRequestPage),
  ],
})
export class PopupSaleRequestPageModule {}
