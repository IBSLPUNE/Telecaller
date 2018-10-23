import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the SchemesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schemes',
  templateUrl: 'schemes.html',
})
export class SchemesPage {
   loading: any;

    from_date_Min: Date = new Date();
    from_date_Max: Date = new Date();
    fromDate: Date = new Date();

    to_date_Min: Date = new Date();
    to_date_Max: Date = new Date();
    toDate: Date = new Date();

    Date_Min: Date = new Date();
    Date_Max: Date = new Date();
    Date: Date = new Date();
   
    vehicle_type_data: Array<{ value: string, text: string }> = [];
    vehicle_type: any;
    vehicletype: any;

    Active: boolean = false;
    //status_data: any;

    Name: any;
    Budget: any;
    Down_Payment: any;
    Installment: string = '';
    Installment_Amount: string = '';
    Intrest: string = '';
  
   SchemeReq = { vehicle_type: '', name: '', budget: '', down_payment: '', installment: '',installment_amount: '', intrest: '', from_date: '', to_date: '', status: false }


   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
     this.getVehicleDetails();
      this.fromDate = new Date();
        this.from_date_Min.setMonth(0, 1);
        this.from_date_Max.setFullYear((new Date()).getFullYear() + 5);

        this.toDate = new Date();
        this.to_date_Min.setMonth(0, 1);
        this.to_date_Max.setFullYear((new Date()).getFullYear() + 5);

        this.Date = new Date();
        this.Date_Min.setMonth(0, 1);
        this.Date_Max.setFullYear((new Date()).getFullYear() + 5);
  } 
    textAreaEmpty(){
     if (this.Installment != '') {
      console.log(this.Installment);
     }
     if (this.Installment_Amount != '') {
      console.log(this.Installment_Amount);
     }
     if (this.Intrest != '') {
      console.log(this.Intrest);
     }
     if (this.Active != true) {
     console.log(this.Active);
    }
    }

  ionViewDidLoad() {

    }
    setDate(date: Date, sDate: string) {
        if (sDate == 'fromDt') {
            this.fromDate = date;
            this.toDate = date;
            
        }
        if (sDate == 'toDt') {
            this.toDate = date;
        }
        if (sDate == 'Dt') {
            this.Date = date;
        }
    }
     getVehicleDetails() {
        //this.showLoader();
        this.authService.getVehicleDetails().then((result) => {
           // this.loading.dismiss();

            this.vehicletype = result;

            this.vehicle_type_data.push({ value: '', text: 'Select Vehicle' });

            for (let i = 0; i < this.vehicletype.length; i++) {
                this.vehicle_type_data.push({ value: this.vehicletype[i].id, text: this.vehicletype[i].name });
            }

            this.vehicle_type = { text: 'Select Vehicle', value: '' };

        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
    saveSchemeRequest(){
      //  if (this.vehicle_type.value == '') {
       //      this.showAlert('Message', 'Please Select Vehicle Type.');
        //    return;
       // }
         if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
         if (this.Budget == undefined) {
             this.showAlert('Message', 'Budget is Mandatory.');
            return;
        }
         if (this.Down_Payment == undefined) {
             this.showAlert('Message', 'Down Payment is Mandatory.');
            return;
        }
         if (this.Installment == undefined) {
             this.showAlert('Message', 'Installment is Mandatory.');
            return;
        }
         if (this.Installment_Amount == undefined) {
             this.showAlert('Message', 'Installment_Amount is Mandatory.');
            return;
        }
        this.showLoader();
        this.SchemeReq.vehicle_type = this.vehicle_type.value;
        this.SchemeReq.name = this.Name;
        this.SchemeReq.budget = this.Budget;
        this.SchemeReq.down_payment = this.Down_Payment;
        this.SchemeReq.installment = this.Installment;
        this.SchemeReq.intrest = this.Intrest;
        this.SchemeReq.installment_amount = this.Installment_Amount;
        this.SchemeReq.status = this.Active;
        this.SchemeReq.from_date = moment(this.fromDate.toString()).format('YYYY-MM-DD');
        this.SchemeReq.to_date = moment(this.toDate.toString()).format('YYYY-MM-DD');
  
        this.authService.saveSchemeRequest(this.SchemeReq).then((result) => {
            this.loading.dismiss();

           if (result["status"].toLowerCase().indexOf('success') >= 0) {
                this.showAlert('success', result["status"]);
                 this.closeModal();
            } 
            else
            {
                this.showAlert('success', result["status"]);
            }
          }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });

    }
     public closeModal() {

        this.viewCtrl.dismiss();
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

    showAlert(title, text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

}
