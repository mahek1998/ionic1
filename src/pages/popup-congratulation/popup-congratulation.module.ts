import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupCongratulationPage } from './popup-congratulation';

@NgModule({
  declarations: [
    PopupCongratulationPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupCongratulationPage),
  ],
})
export class PopupCongratulationPageModule {}
