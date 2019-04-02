import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginSignupPage } from "../pages/login-signup/login-signup";
import { RegisteryourselfPage } from '../pages/registeryourself/registeryourself';
import { VerifyMobileNumberPage } from '../pages/verify-mobile-number/verify-mobile-number';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { VerifyMobileNumber2Page } from '../pages/verify-mobile-number2/verify-mobile-number2';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ActiveDetailPage } from '../pages/active-detail/active-detail';
import { DealDetailPage } from '../pages/deal-detail/deal-detail';
import { DealDetail2Page } from '../pages/deal-detail2/deal-detail2';
import { DealDetail3Page } from '../pages/deal-detail3/deal-detail3';
import { ProfilePage } from "../pages/profile/profile";
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { AboutUsPage } from '../pages/about-us/about-us';
import { PrivacyPage } from '../pages/privacy/privacy';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { MycartPage } from '../pages/mycart/mycart';
import { MyCart2Page } from '../pages/my-cart2/my-cart2';
import { SellerHomePage } from '../pages/seller-home/seller-home';
import { SellerPaymentStatusPage } from '../pages/seller-payment-status/seller-payment-status';
import { SellerProductInventoryPage } from '../pages/seller-product-inventory/seller-product-inventory';
import { SellerProductInventoryDetailPage } from '../pages/seller-product-inventory-detail/seller-product-inventory-detail';
import { SellerLetusKnowPage } from '../pages/seller-letus-know/seller-letus-know';
import { SellerNotificationPage } from '../pages/seller-notification/seller-notification';
import { SellerChangePasswordPage } from '../pages/seller-change-password/seller-change-password';
import { SellerOpenOrderDetailPage } from '../pages/seller-open-order-detail/seller-open-order-detail';
import { AddProductPage } from '../pages/add-product/add-product';
import { HowItWorkPage } from '../pages/how-it-work/how-it-work';
import { PopupCartPage } from '../pages/popup-cart/popup-cart';
import { PopupBuynowPage } from '../pages/popup-buynow/popup-buynow';
import { MyDealPage } from '../pages/my-deal/my-deal';
import { SaveDealPage } from '../pages/save-deal/save-deal';
import { OrederStatusPage } from '../pages/oreder-status/oreder-status';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { CompletePaymentPage } from '../pages/complete-payment/complete-payment';
import { PopupCongratulationPage } from '../pages/popup-congratulation/popup-congratulation';
import { PopupRateusPage } from '../pages/popup-rateus/popup-rateus';
import { PopupLogoutPage } from '../pages/popup-logout/popup-logout';
import { SetProfilePage } from '../pages/set-profile/set-profile';
import { PopupRequestPage } from '../pages/popup-request/popup-request';
import { SmartContractPage } from '../pages/smart-contract/smart-contract';
import { PopupSaleRequestPage } from '../pages/popup-sale-request/popup-sale-request';
import { OpenOrderSalePage } from '../pages/open-order-sale/open-order-sale';
import { MyDraftPage } from '../pages/my-draft/my-draft';
import { PopupDeleteDraftPage } from '../pages/popup-delete-draft/popup-delete-draft';
import { ValidationPage } from '../pages/validation/validation';



import { ScanPage } from "../pages/scan/scan";
import { ProductInformationPage } from "../pages/product-information/product-information";
import { ProductInformation2Page } from "../pages/product-information2/product-information2";
import { ShipStationRegisterPage } from "../pages/ship-station-register/ship-station-register";

import { QrCodeLogPage } from "../pages/qr-code-log/qr-code-log";
import { HelpPage } from '../pages/help/help';
import { PopupPage } from '../pages/popup/popup';

import { PopupRegistrationPage } from '../pages/popup-registration/popup-registration';
import { PopupReportPage } from '../pages/popup-report/popup-report';
import { PopupRegistration2Page } from '../pages/popup-registration2/popup-registration2';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginSignupPage;

  pages: Array<{title: string, menuicon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Deals', menuicon: 'assets/icon/menu-icon-deal.png', component: DealDetailPage },
      // { title: 'Expired Deals', menuicon: 'assets/icon/menu-icon-expire.png', component: ProfilePage },
       { title: 'Home', menuicon: 'assets/icon/menu-icon-mydeal.png', component: ActiveDetailPage },
      { title: 'Saved Deals',  menuicon: 'assets/icon/menu-icon-savedeal.png',component: SaveDealPage },
      { title: 'Notifications', menuicon: 'assets/icon/menu-icon-notification.png', component: SellerNotificationPage },
      { title: 'Account Settings', menuicon: 'assets/icon/menu-icon-setting.png', component: AccountSettingsPage },
      { title: 'Terms & Condition', menuicon: 'assets/icon/menu-icon-terms.png', component: TermsandconditionsPage },
      { title: 'Privacy Policy', menuicon: 'assets/icon/menu-icon-privacy.png', component: PrivacyPage },
      { title: 'About Us', menuicon: 'assets/icon/menu-icon-info.png', component: AboutUsPage },
      { title: 'Contact Us', menuicon: 'assets/icon/menu-icon-contact.png', component: ContactUsPage },
      { title: 'Logout', menuicon: 'assets/icon/menu-icon-logout.png', component: LoginSignupPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
