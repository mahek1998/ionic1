
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
    userData;
    productData;
 
  constructor() {
    console.log('Hello ServiceProvider Provider');
  }


  deals = [

    { 
      product_id:1,
        product_name:"Smartphone",
        product_img:"assets/smartphone.jpg",
        address:"New Delhi",
        lat:28.613939,
        lng:77.209023
      },
      { product_id:1,
        product_name:"SmartWatch",
        product_img:"assets/smartwatch.jpg",
        address:"Mumbai",
        lat:19.075983,
        lng:72.877655
      },
      { product_id:4,
        product_name:"Earphone",
        product_img:"assets/earphone.jpg",
        address:"Patna",
        lat:25.594095,
        lng:85.137566
      },
      { product_id:1,
        product_name:"Wine",
        product_img:"assets/wine.jpg",
        address:"Punne",
        lat:18.520760,
        lng:73.855410
      },
      { 
        product_id:1,
          product_name:"Smartphone",
          product_img:"assets/smartphone.jpg",
          address:"New Delhi",
          lat:28.613939,
          lng:77.209023
        },
        { product_id:1,
          product_name:"SmartWatch",
          product_img:"assets/smartwatch.jpg",
          address:"Mumbai",
          lat:19.075983,
          lng:72.877655
        },
        { product_id:4,
          product_name:"Earphone",
          product_img:"assets/earphone.jpg",
          address:"Patna",
          lat:25.594095,
          lng:85.137566
        },
        { product_id:1,
          product_name:"Wine",
          product_img:"assets/wine.jpg",
          address:"Punne",
          lat:18.520760,
          lng:73.855410
        },
        { 
          product_id:1,
            product_name:"Smartphone",
            product_img:"assets/smartphone.jpg",
            address:"New Delhi",
            lat:28.613939,
            lng:77.209023
          },
          { product_id:1,
            product_name:"SmartWatch",
            product_img:"assets/smartwatch.jpg",
            address:"Mumbai",
            lat:19.075983,
            lng:72.877655
          },
          { product_id:4,
            product_name:"Earphone",
            product_img:"assets/earphone.jpg",
            address:"Patna",
            lat:25.594095,
            lng:85.137566
          },
          { product_id:1,
            product_name:"Wine",
            product_img:"assets/wine.jpg",
            address:"Punne",
            lat:18.520760,
            lng:73.855410
          },
          { 
            product_id:1,
              product_name:"Smartphone",
              product_img:"assets/smartphone.jpg",
              address:"New Delhi",
              lat:28.613939,
              lng:77.209023
            },
            { product_id:1,
              product_name:"SmartWatch",
              product_img:"assets/smartwatch.jpg",
              address:"Mumbai",
              lat:19.075983,
              lng:72.877655
            },
            { product_id:4,
              product_name:"Earphone",
              product_img:"assets/earphone.jpg",
              address:"Patna",
              lat:25.594095,
              lng:85.137566
            },
            { product_id:1,
              product_name:"Wine",
              product_img:"assets/wine.jpg",
              address:"Punne",
              lat:18.520760,
              lng:73.855410
            },
            { product_id:1,
              product_name:"Wine",
              product_img:"assets/wine.jpg",
              address:"Punne",
              lat:18.520760,
              lng:73.855410
            },
            { 
              product_id:1,
                product_name:"Smartphone",
                product_img:"assets/smartphone.jpg",
                address:"New Delhi",
                lat:28.613939,
                lng:77.209023
              },
              { product_id:1,
                product_name:"SmartWatch",
                product_img:"assets/smartwatch.jpg",
                address:"Mumbai",
                lat:19.075983,
                lng:72.877655
              },
              { product_id:4,
                product_name:"Earphone",
                product_img:"assets/earphone.jpg",
                address:"Patna",
                lat:25.594095,
                lng:85.137566
              },
              { product_id:1,
                product_name:"Wine",
                product_img:"assets/wine.jpg",
                address:"Punne",
                lat:18.520760,
                lng:73.855410
              },
              { 
                product_id:1,
                  product_name:"Smartphone",
                  product_img:"assets/smartphone.jpg",
                  address:"New Delhi",
                  lat:28.613939,
                  lng:77.209023
                },
                { product_id:1,
                  product_name:"SmartWatch",
                  product_img:"assets/smartwatch.jpg",
                  address:"Mumbai",
                  lat:19.075983,
                  lng:72.877655
                },
                { product_id:4,
                  product_name:"Earphone",
                  product_img:"assets/earphone.jpg",
                  address:"Patna",
                  lat:25.594095,
                  lng:85.137566
                },
                { product_id:1,
                  product_name:"Wine",
                  product_img:"assets/wine.jpg",
                  address:"Punne",
                  lat:18.520760,
                  lng:73.855410
                },
      
  ]

}
