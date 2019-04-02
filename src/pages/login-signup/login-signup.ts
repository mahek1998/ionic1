import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TermsandconditionsPage } from '../termsandconditions/termsandconditions';
import { PrivacyPage } from '../privacy/privacy';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActiveDetailPage } from '../active-detail/active-detail';
import { AddProductPage } from '../add-product/add-product';
import { AlertController } from 'ionic-angular'
import { ServiceProvider } from '../../providers/service/service';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
/**
 * Generated class for the LoginSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage implements OnInit{
  model_phone_number
  loginPhone_number
  userStatus="active";
  vendorStatus="";
  pageTitle="SignIn"
  loginSignup: string = "login";
  isAndroid: boolean = false;
   typeOfUser="user"
   userDataArray=[];
   loginPhoneNumber;
   signupPhoneNumber
   loginForm:FormGroup
   signupForm:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController,private service:ServiceProvider,public toastController: ToastController) {}
  ngOnInit() {
    this.loginForm=new FormGroup({
      // mobileNo:new FormControl('',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
     //  loginCountryCode:new FormControl('',[Validators.required]),
      loginPassword:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    });

    this.signupForm=new FormGroup({
      firstName:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(16), Validators.pattern(/^[a-zA-Z\\s]*$/)]),
      lastName:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(16),Validators.pattern(/^[a-zA-Z\\s]*$/)]),
      // countryCode:new FormControl('',[Validators.required]),
      // signupMobileNo:new FormControl('',[Validators.required, Validators.pattern(/^[6-9]\d{9}$/),Validators.minLength(10), Validators.maxLength(10)]),
      signupPassword:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
      signupConfirmPassword:new FormControl('',[Validators.required])
    });
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSignupPage');
  }
  pageTitleChangeSingUp(){
    this.pageTitle="Register Your self"
 }
 pageTitleChangeLogin(){
   this.pageTitle="SignIn"
 }
 termsAndCondition(){
  this.navCtrl.push(TermsandconditionsPage)
 }
 privacyPolicy(){
   this.navCtrl.push(PrivacyPage)
 }
 userType(){
   this.userStatus="active";
   this.vendorStatus="inactive";
   this.typeOfUser="user"
 }
 vendorType(){
  this.userStatus="inactive";
  this.vendorStatus="active";
  this.typeOfUser="vendor"
 }
 login(){
   console.log(this.loginPhone_number)
   this.userDataArray=JSON.parse(localStorage.getItem('userData'))
   let count=1;
    if(this.userDataArray==null){
       console.log('data does not exist')
    }else{
     for(let i in this.userDataArray){
       if(this.userDataArray[i].mobileNo==this.loginPhone_number && this.userDataArray[i].password==this.loginForm.value.loginPassword){
         if(this.userDataArray[i].typeOfUser=="vendor"){
           count++
           this.navCtrl.setRoot(AddProductPage)
           this.presentToast('Login successfully')
         }else{
           count++
           this.service.userData=this.userDataArray[i]
           this.navCtrl.setRoot(ActiveDetailPage)
           this.presentToast('Login successfully')
         }
       }
     }
     if(count==1){
      const alert =this.alert.create({
        message: 'Wrong user or pass',
        buttons: ['OK']
      });
      alert.present();
     }
  }
}
signUp(){
  console.log(this.model_phone_number)
   this.userDataArray=JSON.parse(localStorage.getItem('userData'))?JSON.parse(localStorage.getItem('userData')):[];
   let count=1
   var userObject={firstName:this.signupForm.value.firstName,lastName:this.signupForm.value.lastName,mobileNo:this.model_phone_number,password:this.signupForm.value.signupPassword,typeOfUser:this.typeOfUser}
   if(this.userDataArray==null){
     console.log('data not exist')
   }else{
     for(let i in this.userDataArray){
       if(this.userDataArray[i].mobileNo==userObject.mobileNo){
        count=10
       }
     }
     if(count==1){
      this.userDataArray.push(userObject)   
      localStorage.setItem('userData',JSON.stringify(this.userDataArray))
      this.presentToast('Signup successfully');
      this.signupForm.reset();
      this.model_phone_number=''
     }else{
      const alert =this.alert.create({
        message: 'MobileNo already exist..',
        buttons: ['OK']
      });
      alert.present();
      
     }
   }
  
   }
   forgotPassword(){
     this.navCtrl.push(ForgotPasswordPage)
   }
   async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position:"top",
      
    });
    toast.present();
  }

}
