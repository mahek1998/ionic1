import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
declare var google:any;

/**
 * Generated class for the DealDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal-detail',
  templateUrl: 'deal-detail.html',
})
export class DealDetailPage implements OnInit{
  
  lat: number = 58.678418;
  lng: number = 74.809007;
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;  
  
    map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  ngOnInit() {
    this.initializeMap(this.lat,this.lng)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealDetailPage');
  }
  initializeMap(Lattt,lnggg){
    var mapProp = {
        center:new google.maps.LatLng(Lattt,lnggg),
        zoom:5,
    };
    this.map = new google.maps.Map(document.getElementById("googleMap1"),mapProp);
   
   
      //var contentString="Name: "+this.allData[i].objName+`<br>`+"Address: "+this.allData[i].objAddress;
      //var infowindow = new google.maps.InfoWindow({
     //   content: contentString
     // });
       this.addMarker(this.lat,this.lng);
  

}
addMarker(lat1,lng1){
  var myLatLng = {lat:lat1, lng:lng1};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: this.map,   
  });
  marker.setMap(this.map);
  // marker.addListener('click', function() {
  //   window.open(this.map, marker);
  // });
 }
}
