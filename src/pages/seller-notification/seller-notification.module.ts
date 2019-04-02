import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerNotificationPage } from './seller-notification';

@NgModule({
  declarations: [
    SellerNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerNotificationPage),
  ],
})
export class SellerNotificationPageModule {}
