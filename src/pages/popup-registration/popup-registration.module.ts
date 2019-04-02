import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupRegistrationPage } from './popup-registration';

@NgModule({
  declarations: [
    PopupRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupRegistrationPage),
  ],
})
export class PopupRegistrationPageModule {}
