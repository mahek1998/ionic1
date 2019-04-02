import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerChangePasswordPage } from './seller-change-password';

@NgModule({
  declarations: [
    SellerChangePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerChangePasswordPage),
  ],
})
export class SellerChangePasswordPageModule {}
