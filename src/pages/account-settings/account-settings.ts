import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { VerifyMobileNumberPage } from '../verify-mobile-number/verify-mobile-number';
import { ChangePasswordPage } from '../change-password/change-password';

/**
 * Generated class for the AccountSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingsPage');
  }
  userProfile(){
  this.navCtrl.push(ProfilePage)
  }
  changeMobile(){
    this.navCtrl.push(VerifyMobileNumberPage)
  }
  changePassword(){
    this.navCtrl.push(ChangePasswordPage)

  }

}
