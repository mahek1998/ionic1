import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './login-signup';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

@NgModule({
  declarations: [
    LoginSignupPage,
   
  ],
  imports: [
    IonicPageModule.forChild(LoginSignupPage),
    ReactiveFormsModule, FormsModule,
    InternationalPhoneNumberModule
    
  ],
})
export class LoginSignupPageModule {}
