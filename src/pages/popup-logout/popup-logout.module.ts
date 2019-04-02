import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupLogoutPage } from './popup-logout';

@NgModule({
  declarations: [
    PopupLogoutPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupLogoutPage),
  ],
})
export class PopupLogoutPageModule {}
