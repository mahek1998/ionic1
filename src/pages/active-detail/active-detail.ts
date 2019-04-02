import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DealDetailPage } from '../deal-detail/deal-detail';
import { DealDetail2Page } from '../deal-detail2/deal-detail2';
import { DealDetail3Page } from '../deal-detail3/deal-detail3';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ActiveDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active-detail',
  templateUrl: 'active-detail.html',
})
export class ActiveDetailPage {
data = this.service.deals;
  dealsData=[];
  localstorage: any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
  
  for(let i=0; i<4; i++)
  {
        this.dealsData.push(this.data[i]);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveDetailPage');
  }

  dealDetails(id)
  {
       localStorage.setItem('view',JSON.stringify(id))
       this.navCtrl.push(DealDetailPage, {
         dealData:id
       });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.dealsData.push( this.data[i]);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }



  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        this.dealsData.unshift( this.data[i]);
      }
          console.log('Async operation has ended');


      refresher.complete();
    }, 2000);
  }




}






// { product_id:1,
//   product_name:"Smartphone",
//   product_img:"assets/smartphone.jpg",
//   address:"New Delhi",
//   lat:28.613939,
//   lng:77.209023
// },
// { product_id:1,
//   product_name:"SmartWatch",
//   product_img:"assets/smartwatch.jpg",
//   address:"Mumbai",
//   lat:19.075983,
//   lng:72.877655
// },
// { product_id:1,
//   product_name:"Earphone",
//   product_img:"assets/earphone.jpg",
//   address:"Patna",
//   lat:25.594095,
//   lng:85.137566
// },
// { product_id:1,
//   product_name:"Wine",
//   product_img:"assets/wine.jpg",
//   address:"Punne",
//   lat:18.520760,
//   lng:73.855410
// }

