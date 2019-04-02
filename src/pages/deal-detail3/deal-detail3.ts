import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
declare var google:any;
/**
 * Generated class for the DealDetail3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal-detail3',
  templateUrl: 'deal-detail3.html',
})
export class DealDetail3Page implements OnInit{
  
  lat: number = 58.678418;
  lng: number = 74.809007;
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;  
  
    map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.initializeMap(this.lat,this.lng)
  }

  initializeMap(Lattt,lnggg){
    var mapProp = {
        center:new google.maps.LatLng(Lattt,lnggg),
        zoom:5,
    };
    this.map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);
       this.addMarker(this.lat,this.lng);
  

}
addMarker(lat1,lng1){
  var myLatLng = {lat:lat1, lng:lng1};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: this.map,   
  });
  marker.setMap(this.map);
  
 }

}
