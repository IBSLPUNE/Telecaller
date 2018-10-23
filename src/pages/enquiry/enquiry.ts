import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';

/**
 * Generated class for the EnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {

  loading: any;
  
   
   firstName: any;
   middleName: string = '';
   lastName: string = '';
   MobileNo: any;
   Email: string = '';
   Address: string = '';
   Place: string = '';
   description: string = '';

   scheme_type_data: Array<{ value: string, text: string }> = [];
   scheme_type: any;
   schemetype: any;

   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();


   EnquiryReq = { first_name: '', middle_name: '', last_name: '', email: '', mobile_no: '', address: '', place:'', member_id:'', description:'', selectedDate: '', scheme_type: '', status: true}

   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
   this.getSchemeList();
      this.selectedDate = new Date();
      this.date_Min.setMonth(-500, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 1);

  }
    textAreaEmpty(){
     if (this.middleName != '') {
      console.log(this.middleName);
     }
     if (this.lastName != '') {
      console.log(this.lastName);
     }
     if (this.Email != '') {
      console.log(this.Email);
     }
      if (this.Address != '') {
      console.log(this.Address);
     }
      if (this.Place != '') {
      console.log(this.Place);
     }
      if (this.description != '') {
      console.log(this.description);
     }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryPage');
 
  }
  dateChanged() {
       // this.getEmployeePlanList();
  }
  setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
  }
  compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
  }
   getSchemeList() {
      //  this.showLoader();
        this.authService.getSchemeList().then((result) => {
           // this.loading.dismiss();

            this.schemetype = result;

            this.scheme_type_data.push({ value: '', text: 'Select Scheme' });

            for (let i = 0; i < this.schemetype.length; i++) {
                this.scheme_type_data.push({ value: this.schemetype[i].id, text: this.schemetype[i].name });
            }

            this.scheme_type = { text: 'Select Scheme', value: '' };

           
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
  saveEnquiryRequest(){
         
        if (this.MobileNo == undefined) {
             this.showAlert('Message', 'Mobile No is Mandatory.');
            return;
        }
        if (this.firstName == undefined) {
             this.showAlert('Message', 'First Name is Mandatory.');
            return;
        }
        if (this.scheme_type.value == '') {
             this.showAlert('Message', 'Please Select Scheme.');
            return;
        }
      this.showLoader();
        this.EnquiryReq.first_name = this.firstName;
        this.EnquiryReq.middle_name = this.middleName;
        this.EnquiryReq.last_name = this.lastName;
        this.EnquiryReq.email = this.Email;
        this.EnquiryReq.mobile_no = this.MobileNo;
        this.EnquiryReq.address = this.Address;
        this.EnquiryReq.place = this.Place;
        this.EnquiryReq.description = this.description;
        this.EnquiryReq.member_id = localStorage.getItem('member_id');
        this.EnquiryReq.selectedDate = moment(this.selectedDate.toString()).format('YYYY-MM-DD');
        this.EnquiryReq.scheme_type = this.scheme_type.value;
        this.EnquiryReq.status = true;
     
        this.authService.saveEnquiryRequest(this.EnquiryReq).then((result) => {
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
