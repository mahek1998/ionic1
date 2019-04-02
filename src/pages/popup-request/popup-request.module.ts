import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupRequestPage } from './popup-request';

@NgModule({
  declarations: [
    PopupRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupRequestPage),
  ],
})
export class PopupRequestPageModule {}
