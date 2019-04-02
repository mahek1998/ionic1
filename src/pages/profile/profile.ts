import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service: ServiceProvider) {
   this.userData=this.service.userData
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
