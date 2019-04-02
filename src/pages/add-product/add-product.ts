import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginSignupPage } from '../login-signup/login-signup';

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }
  logout(){
    this.navCtrl.setRoot(LoginSignupPage)
  }

}
