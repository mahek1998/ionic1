import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDealPage } from './my-deal';

@NgModule({
  declarations: [
    MyDealPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDealPage),
  ],
})
export class MyDealPageModule {}
