import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms'
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginSignupPageModule } from "../pages/login-signup/login-signup.module";
import { RegisteryourselfPageModule } from '../pages/registeryourself/registeryourself.module';
import { VerifyMobileNumberPageModule } from '../pages/verify-mobile-number/verify-mobile-number.module';
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { VerifyMobileNumber2PageModule } from '../pages/verify-mobile-number2/verify-mobile-number2.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { ChangePasswordPageModule } from '../pages/change-password/change-password.module';
import { ActiveDetailPageModule } from '../pages/active-detail/active-detail.module';
import { DealDetailPageModule } from '../pages/deal-detail/deal-detail.module';
import { DealDetail2PageModule } from '../pages/deal-detail2/deal-detail2.module';
import { DealDetail3PageModule } from '../pages/deal-detail3/deal-detail3.module';
import { ProfilePageModule } from "../pages/profile/profile.module";
import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module';
import { TermsandconditionsPageModule } from '../pages/termsandconditions/termsandconditions.module';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { PrivacyPageModule } from '../pages/privacy/privacy.module';
import { AccountSettingsPageModule } from '../pages/account-settings/account-settings.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { MycartPageModule } from '../pages/mycart/mycart.module';
import { MyCart2PageModule } from '../pages/my-cart2/my-cart2.module';
import { SellerHomePageModule } from '../pages/seller-home/seller-home.module';
import { SellerPaymentStatusPageModule } from '../pages/seller-payment-status/seller-payment-status.module';
import { SellerProductInventoryDetailPageModule } from '../pages/seller-product-inventory-detail/seller-product-inventory-detail.module';
import { SellerLetusKnowPageModule } from '../pages/seller-letus-know/seller-letus-know.module';
import { SellerNotificationPageModule } from '../pages/seller-notification/seller-notification.module';
import { SellerChangePasswordPageModule } from '../pages/seller-change-password/seller-change-password.module';
import { SellerOpenOrderDetailPageModule } from '../pages/seller-open-order-detail/seller-open-order-detail.module';
import { AddProductPageModule } from '../pages/add-product/add-product.module';
import { HowItWorkPageModule } from '../pages/how-it-work/how-it-work.module';
import { SellerProductInventoryPageModule } from '../pages/seller-product-inventory/seller-product-inventory.module';
import { PopupCartPageModule } from '../pages/popup-cart/popup-cart.module';
import { PopupBuynowPageModule } from '../pages/popup-buynow/popup-buynow.module';
import { MyDealPageModule } from '../pages/my-deal/my-deal.module';
import { SaveDealPageModule } from '../pages/save-deal/save-deal.module';
import { OrederStatusPageModule } from '../pages/oreder-status/oreder-status.module';
import { PaymentGatewayPageModule } from '../pages/payment-gateway/payment-gateway.module';
import { CompletePaymentPageModule } from '../pages/complete-payment/complete-payment.module';
import { PopupCongratulationPageModule } from '../pages/popup-congratulation/popup-congratulation.module';
import { PopupRateusPageModule } from '../pages/popup-rateus/popup-rateus.module';
import { PopupLogoutPageModule } from '../pages/popup-logout/popup-logout.module';
import { SetProfilePageModule } from '../pages/set-profile/set-profile.module';
import { PopupRequestPageModule } from '../pages/popup-request/popup-request.module';
import { SmartContractPageModule } from '../pages/smart-contract/smart-contract.module';
import { PopupSaleRequestPageModule } from '../pages/popup-sale-request/popup-sale-request.module';
import { OpenOrderSalePageModule } from '../pages/open-order-sale/open-order-sale.module';
import { MyDraftPageModule } from '../pages/my-draft/my-draft.module';
import { PopupDeleteDraftPageModule } from '../pages/popup-delete-draft/popup-delete-draft.module';
import { ValidationPageModule } from '../pages/validation/validation.module';



import { ScanPageModule } from  '../pages/scan/scan.module';
import { ProductInformationPageModule } from "../pages/product-information/product-information.module";
import { ProductInformation2PageModule } from "../pages/product-information2/product-information2.module";
import { ShipStationRegisterPageModule } from "../pages/ship-station-register/ship-station-register.module";
import { QrCodeLogPageModule } from "../pages/qr-code-log/qr-code-log.module";
import { HelpPageModule } from '../pages/help/help.module';

import { PopupPageModule } from '../pages/popup/popup.module';
import { PopupRegistrationPageModule } from '../pages/popup-registration/popup-registration.module';
import { PopupReportPageModule } from '../pages/popup-report/popup-report.module';
import { PopupRegistration2PageModule } from '../pages/popup-registration2/popup-registration2.module';
import { ServiceProvider } from '../providers/service/service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisteryourselfPageModule,
    VerifyMobileNumberPageModule,
    LoginSignupPageModule,
    ForgotPasswordPageModule,
    ChangePasswordPageModule,
    VerifyMobileNumber2PageModule,
    ResetPasswordPageModule,
    ActiveDetailPageModule,
    DealDetailPageModule,
    DealDetail2PageModule,
    DealDetail3PageModule,
    ProfilePageModule,
    EditProfilePageModule,
    TermsandconditionsPageModule,
    AboutUsPageModule,
    PrivacyPageModule,
    AccountSettingsPageModule,
    ContactUsPageModule,
    MycartPageModule,
    MyCart2PageModule,
    SellerHomePageModule,
    SellerPaymentStatusPageModule,
    SellerProductInventoryPageModule,
    SellerProductInventoryDetailPageModule,
    SellerLetusKnowPageModule,
    SellerNotificationPageModule,
    SellerChangePasswordPageModule,
    SellerOpenOrderDetailPageModule,
    AddProductPageModule,
    HowItWorkPageModule,
    PopupCartPageModule,
    PopupBuynowPageModule,
    MyDealPageModule,
    SaveDealPageModule,
    OrederStatusPageModule,
    PaymentGatewayPageModule,
    CompletePaymentPageModule,
    PopupCongratulationPageModule,
    PopupRateusPageModule,
    SetProfilePageModule,
    PopupRequestPageModule,
    SmartContractPageModule,
    PopupSaleRequestPageModule,
    OpenOrderSalePageModule,
    MyDraftPageModule,
    PopupDeleteDraftPageModule,
    ValidationPageModule,
    InternationalPhoneNumberModule,
   

    ScanPageModule,
    ProductInformationPageModule,
    ProductInformation2PageModule,
    ShipStationRegisterPageModule,
    QrCodeLogPageModule,
    HelpPageModule,
    PopupPageModule,
    PopupLogoutPageModule,
    PopupRegistrationPageModule,
    PopupReportPageModule,
    PopupRegistration2PageModule,
    ReactiveFormsModule ,FormsModule,
    GooglePlaceModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    ServiceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
