import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrederStatusPage } from './oreder-status';

@NgModule({
  declarations: [
    OrederStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(OrederStatusPage),
  ],
})
export class OrederStatusPageModule {}
