import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductInformationPage } from './product-information';

@NgModule({
  declarations: [
    ProductInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductInformationPage),
  ],
})
export class ProductInformationPageModule {}
