import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveDetailPage } from './active-detail';

@NgModule({
  declarations: [
    ActiveDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiveDetailPage),
  ],
})
export class ActiveDetailPageModule {}
