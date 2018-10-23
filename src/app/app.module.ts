import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
 import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { PartialMenuPage } from '../pages/partial-menu/partial-menu';

import { CompanyPage } from '../pages/company/company';
import { BranchListPage } from '../pages/branch-list/branch-list';
import { EmployeeListPage } from '../pages/employee-list/employee-list';
import { EmployeeListDetailPage } from '../pages/employee-list-detail/employee-list-detail';
import { EnquiryListPage } from '../pages/enquiry-list/enquiry-list';
import { EnquiryListDetailPage } from '../pages/enquiry-list-detail/enquiry-list-detail';
import { SchemesListPage } from '../pages/schemes-list/schemes-list';
import { SchemesListDetailPage } from '../pages/schemes-list-detail/schemes-list-detail';
import { VehicleListPage } from '../pages/vehicle-list/vehicle-list';
import { DocumentListPage } from '../pages/document-list/document-list';
import { FinancerListPage } from '../pages/financer-list/financer-list';
import { ShowroomListPage } from '../pages/showroom-list/showroom-list';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { EmployeeSchemesListPage } from '../pages/employee-schemes-list/employee-schemes-list';
import { BookingListPage } from '../pages/booking-list/booking-list';
import { AdminBookingListPage } from '../pages/admin-booking-list/admin-booking-list';
import { AdminEnquiryListPage } from '../pages/admin-enquiry-list/admin-enquiry-list';
import { AgentListPage } from '../pages/agent-list/agent-list';

import { DatePickerModule } from 'ion-datepicker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmpdatePipe } from '../pipes/empdate/empdate';
import { EmpnamePipe } from '../pipes/empname/empname';
import { SchemePipe } from '../pipes/scheme/scheme';
import { BranchPipe } from '../pipes/branch/branch';
import { EnquirynamePipe } from '../pipes/enquiryname/enquiryname';
import { AgentPipe } from '../pipes/agent/agent';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PartialMenuPage,
    CompanyPage,
    BranchListPage,
    EmployeeListPage,
    EnquiryListPage,
    EnquiryListDetailPage,
    SchemesListPage,
    SchemesListDetailPage,
    EmployeeListDetailPage,
    VehicleListPage,
    DocumentListPage,
    FinancerListPage,
    ShowroomListPage,
    UserProfilePage,
    EmployeeSchemesListPage,
    BookingListPage,
    AdminBookingListPage,
    AdminEnquiryListPage,
    EmpdatePipe,
    EmpnamePipe,
    SchemePipe,
    BranchPipe,
    EnquirynamePipe,
    AgentListPage,
    AgentPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    DatePickerModule,
    NgxPaginationModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PartialMenuPage,
    CompanyPage,
    BranchListPage,
    EmployeeListPage,
    EnquiryListPage,
    EnquiryListDetailPage,
    SchemesListPage,
    SchemesListDetailPage,
    EmployeeListDetailPage,
    VehicleListPage,
    DocumentListPage,
    FinancerListPage,
    ShowroomListPage,
    UserProfilePage,
    EmployeeSchemesListPage,
    BookingListPage,
    AdminBookingListPage,
    AdminEnquiryListPage,
    AgentListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
     InAppBrowser
  ]
})
export class AppModule {}
