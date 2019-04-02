import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDraftPage } from './my-draft';

@NgModule({
  declarations: [
    MyDraftPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDraftPage),
  ],
})
export class MyDraftPageModule {}
