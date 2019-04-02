import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodeLogPage } from './qr-code-log';

@NgModule({
  declarations: [
    QrCodeLogPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodeLogPage),
  ],
})
export class QrCodeLogPageModule {}
