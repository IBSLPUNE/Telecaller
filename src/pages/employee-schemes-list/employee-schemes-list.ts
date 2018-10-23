import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SchemesListDetailPage } from '../schemes-list-detail/schemes-list-detail';
import moment from 'moment';

/**
 * Generated class for the EmployeeSchemesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-schemes-list',
  templateUrl: 'employee-schemes-list.html',
})
export class EmployeeSchemesListPage {

  loading:any;
  employee_data: any;
  date_Max1: any;
  date_Min: Date = new Date();
  date_Max: Date = new Date();
  selectedDate: Date = new Date();
  selectedDate1: Date = new Date();

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
      this.selectedDate = new Date();
      this.selectedDate1 = new Date();
      this.date_Min.setMonth(0, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 5);
      this.getPerticularSchemeList();
   }
    dateChanged() {
        this.getPerticularSchemeList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeListPage');
  }
    showNewSchemeRequest(){
       var SchemeRequestPagemodalPage = this.modalCtrl.create('SchemesPage');
           SchemeRequestPagemodalPage.onDidDismiss(data => {
            this.getPerticularSchemeList();
        });
           SchemeRequestPagemodalPage.present();
   }
   getPerticularSchemeList(){
        this.showLoader();
            this.authService.getPerticularSchemeList(localStorage.getItem('member_id'),moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.employee_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });

        this.loading.present();
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
     showModalDialog(scheme_req_data)
    {
      var data = {
            id: scheme_req_data.id,
            scheme_type: scheme_req_data.scheme_type,
            name: scheme_req_data.name,
            budget: scheme_req_data.budget,
            down_payment: scheme_req_data.down_payment,
            installment: scheme_req_data.installment,
            installment_amount: scheme_req_data.installment_amount,
            intrest: scheme_req_data.intrest,
            from_date: scheme_req_data.from_date,
            to_date: scheme_req_data.to_date,
            status: scheme_req_data.status,
            vehicle_type: scheme_req_data.vehicle_type
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(SchemesListDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();

    }
    cancelschemeRequest(scheme_id) {
       // this.showLoader();
        this.authService.cancelschemeRequest(scheme_id).then((result) => {
            //this.loading.dismiss();

            this.getPerticularSchemeList();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(scheme_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelschemeRequest(scheme_id);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }
}
