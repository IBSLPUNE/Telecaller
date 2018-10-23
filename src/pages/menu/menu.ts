import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { CompanyPage } from '../company/company';
import { BranchPage } from '../branch/branch';
import { EmployeeListPage } from '../employee-list/employee-list';
import { EnquiryListPage } from '../enquiry-list/enquiry-list';
import { EmployeeSchemesListPage } from '../employee-schemes-list/employee-schemes-list';
import { UserProfilePage } from '../user-profile/user-profile';
import { BookingListPage } from '../booking-list/booking-list';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController, private InAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
   gotoAnotherPage(clickedOn) {
      
        
         if (clickedOn == 'Profile') {
            this.navCtrl.push(UserProfilePage);
        }
          if (clickedOn == 'Logout') {
            localStorage.removeItem('member_id');
            this._app.getRootNavs()[0].setRoot(LoginPage); //this._app.getRootNav().setRoot(LoginPage);
        }
         if (clickedOn == 'Branch') {
            this.navCtrl.push(BranchPage);
        }
         if (clickedOn == 'CreateEmployee') {
            this.navCtrl.push(EmployeeListPage);
        }
         if (clickedOn == 'Enquiry') {
            this.navCtrl.push(EnquiryListPage);
        } 
        if (clickedOn == 'Schemes') {
            this.navCtrl.push(EmployeeSchemesListPage);
        }
         if (clickedOn == 'Booking') {
            this.navCtrl.push(BookingListPage);
        }
          if (clickedOn == 'apk') {
             this.InAppBrowser.create('http://54.169.157.50/home',"_system","defaultBrowser=chrome");
        }
          }
    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(() => {
            //console.log('Dismissed toast');
        });
        toast.present();
    }

    showAlert(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

}
