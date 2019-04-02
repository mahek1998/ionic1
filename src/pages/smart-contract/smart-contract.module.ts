import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartContractPage } from './smart-contract';

@NgModule({
  declarations: [
    SmartContractPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartContractPage),
  ],
})
export class SmartContractPageModule {}
