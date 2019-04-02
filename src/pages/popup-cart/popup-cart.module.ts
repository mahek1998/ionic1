import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupCartPage } from './popup-cart';

@NgModule({
  declarations: [
    PopupCartPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupCartPage),
  ],
})
export class PopupCartPageModule {}
