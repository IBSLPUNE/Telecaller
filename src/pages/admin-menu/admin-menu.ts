import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { CompanyPage } from '../company/company';
import { BranchListPage } from '../branch-list/branch-list';
import { EmployeeListPage } from '../employee-list/employee-list';
import { SchemesListPage } from '../schemes-list/schemes-list';
import { VehicleListPage } from '../vehicle-list/vehicle-list';
import { DocumentListPage } from '../document-list/document-list';
import { FinancerListPage } from '../financer-list/financer-list';
import { ShowroomListPage } from '../showroom-list/showroom-list';
import { AdminBookingListPage } from '../admin-booking-list/admin-booking-list';
import { AdminEnquiryListPage } from '../admin-enquiry-list/admin-enquiry-list';
import { AgentListPage } from '../agent-list/agent-list';


/**
 * Generated class for the AdminMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-menu',
  templateUrl: 'admin-menu.html',
})
export class AdminMenuPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminMenuPage');
  }
    gotoAnotherPage(clickedOn) {
        if (clickedOn == 'CompanyProfile') {
            this.navCtrl.push(CompanyPage);
        }
        if (clickedOn == 'Branch') {
            this.navCtrl.push(BranchListPage);
        }
        if (clickedOn == 'CreateEmployee') {
            this.navCtrl.push(EmployeeListPage);
        }
        if (clickedOn == 'Schemes') {
            this.navCtrl.push(SchemesListPage);
        }
        if (clickedOn == 'Vehicle') {
            this.navCtrl.push(VehicleListPage);
        }
        if (clickedOn == 'Document') {
            this.navCtrl.push(DocumentListPage);
        }
        if (clickedOn == 'Financer') {
            this.navCtrl.push(FinancerListPage);
        }
        if (clickedOn == 'Showroom') {
            this.navCtrl.push(ShowroomListPage);
        }
        if (clickedOn == 'Booking') {
            this.navCtrl.push(AdminBookingListPage);
        }
        if (clickedOn == 'Enquiry') {
            this.navCtrl.push(AdminEnquiryListPage);
        }
        if (clickedOn == 'Agent') {
            this.navCtrl.push(AgentListPage);
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
