import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipStationRegisterPage } from './ship-station-register';

@NgModule({
  declarations: [
    ShipStationRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipStationRegisterPage),
  ],
})
export class ShipStationRegisterPageModule {}
