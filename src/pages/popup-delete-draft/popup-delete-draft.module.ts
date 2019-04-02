import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupDeleteDraftPage } from './popup-delete-draft';

@NgModule({
  declarations: [
    PopupDeleteDraftPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupDeleteDraftPage),
  ],
})
export class PopupDeleteDraftPageModule {}
