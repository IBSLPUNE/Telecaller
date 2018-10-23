import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
   loading: any;
   
   
   PanCard: any;
   AdharCard: any;
   LicenceNo: string = '';
   LightBill: string = '';
   RentAggrement: string = '';
   BS: string = '';
   ITR: string = '';
   NativeLightBill: string = '';
   FirmName: any;

   GuarantorPan: string = '';
   GuarantorAdhar: string = '';
   GuarantorLightBill: string = '';
   GuarantorRentAggrement: string = '';
   GuarantorBS: string = '';
   GuarantorITR: string = '';
   Unit: any;
  
   Guarantor1PanCard: string = '';
   Guarantor1AdharCard: string = '';
   Guarantor1LightBill: string = '';
   Guarantor1RentAggrement: string = '';
   Guarantor1BS: string = '';
   Guarantor1ITR: string = '';
   Unit1: any;

   enquiry_type_data: Array<{ value: string, text: string }> = [];
   enquiry_type: any;
   enquirytype: any;

   employee_type_data: Array<{ value: string, text: string }> = [];
   employee_type: any;
   employeetype: any;

   agent_type_data: Array<{ value: string, text: string }> = [];
   agent_type: any;
   agenttype: any;

   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();

    Active: boolean = false;
 
   BookingReq = {member_id: '', enquiry_type: '', agent_type: '', pan_card: '', adhar_card: '', licence_no: '', light_bill: '', rent_aggrement: '', bs: '', itr:'', native_light_bill:'', firm_name:'', guarantor_pan:'', guarantor_adhar: '', guarantor_light_bill: '', garantor_rent_aggrement: '', guarantor_BS: '', guarantor_ITR:  '', unit:  '', guarantor1_pancard: '', guarantor1_adharcard: '', guarantor1_lightbill: '', guarantor1_rent_aggrement: '', guarantor1_BS: '', guarantor1_ITR: '', unit1:  '', selectedDate: '', employee_type: '', status: false}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
   this.getenquiryDetails();
      this.selectedDate = new Date();
      this.date_Min.setMonth(-500, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 1);
   }
   textAreaEmpty(){
     if (this.LicenceNo != '') {
      console.log(this.LicenceNo);
     }
     if (this.LightBill != '') {
      console.log(this.LightBill);
     }
     if (this.RentAggrement != '') {
      console.log(this.RentAggrement);
     }
      if (this.BS != '') {
      console.log(this.BS);
     }
      if (this.ITR != '') {
      console.log(this.ITR);
     }
      if (this.NativeLightBill != '') {
      console.log(this.NativeLightBill);
     }
     if (this.GuarantorPan != '') {
      console.log(this.GuarantorPan);
     }
     if (this.GuarantorAdhar != '') {
      console.log(this.GuarantorAdhar);
     }
     if (this.GuarantorLightBill != '') {
      console.log(this.GuarantorLightBill);
     }
      if (this.GuarantorRentAggrement != '') {
      console.log(this.GuarantorRentAggrement);
     }
      if (this.GuarantorBS != '') {
      console.log(this.GuarantorBS);
     }
      if (this.GuarantorITR != '') {
      console.log(this.GuarantorITR);
     }
     if (this.Guarantor1PanCard != '') {
      console.log(this.Guarantor1PanCard);
     }
     if (this.Guarantor1AdharCard != '') {
      console.log(this.Guarantor1AdharCard);
     }
     if (this.Guarantor1LightBill != '') {
      console.log(this.Guarantor1LightBill);
     }
      if (this.Guarantor1RentAggrement != '') {
      console.log(this.Guarantor1RentAggrement);
     }
      if (this.Guarantor1BS != '') {
      console.log(this.Guarantor1BS);
     }
      if (this.Guarantor1ITR != '') {
      console.log(this.Guarantor1ITR);
     }
      if (this.Active != true) {
     console.log(this.Active);
    }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
   compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
  }
  dateChanged() {
       // this.getEmployeePlanList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
   getenquiryDetails() {
      //  this.showLoader();
        this.authService.getenquiryDetails().then((result) => {
           // this.loading.dismiss();

            this.enquirytype = result;

            this.enquiry_type_data.push({ value: '', text: 'Select Enquiry' });

            for (let i = 0; i < this.enquirytype.length; i++) {
                this.enquiry_type_data.push({ value: this.enquirytype[i].id, text: this.enquirytype[i].mobile_no + ' ' + this.enquirytype[i].name_first});
            }

            this.enquiry_type = { text: 'Select Enquiry', value: '' };
            this.getEmployeeList();
           
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getEmployeeList() {
      //  this.showLoader();
        this.authService.getEmployeeList().then((result) => {
           // this.loading.dismiss();

            this.employeetype = result;

            this.employee_type_data.push({ value: '', text: 'Select Employee' });

            for (let i = 0; i < this.employeetype.length; i++) {
                this.employee_type_data.push({ value: this.employeetype[i].id, text: this.employeetype[i].code + ' ' + this.employeetype[i].prefix + ' ' + this.employeetype[i].first_name + ' ' + this.employeetype[i].last_name });
            }

            this.employee_type = { text: 'Select Employee', value: '' };
            this.getAgentList();
            
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    getAgentList() {
      //  this.showLoader();
        this.authService.getAgentList().then((result) => {
           // this.loading.dismiss();

            this.agenttype = result;

            this.agent_type_data.push({ value: '', text: 'Select Agent' });

            for (let i = 0; i < this.agenttype.length; i++) {
                this.agent_type_data.push({ value: this.agenttype[i].id, text: this.agenttype[i].first_name + ' ' + this.agenttype[i].middel_name + ' ' + this.agenttype[i].last_name});
            }
            this.agent_type = { text: 'Select Agent', value: '' };
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    saveBookingRequest(){

        if (this.enquiry_type.value == '') {
             this.showAlert('Message', 'Please Select Enquiry.');
            return;
        } 
        if (this.PanCard == undefined) {
             this.showAlert('Message', 'PanCard is Mandatory.');
            return;
        }
        if (this.AdharCard == undefined) {
             this.showAlert('Message', 'AdharCard is Mandatory.');
            return;
        }
        if (this.Active == false) {
             this.showAlert('Message', 'Status is Mandatory.');
            return;
        }
       
        this.showLoader();
        this.BookingReq.member_id = localStorage.getItem('member_id');
        this.BookingReq.enquiry_type = this.enquiry_type.value;
        this.BookingReq.employee_type = this.employee_type.value;
        this.BookingReq.agent_type = this.agent_type.value;
        this.BookingReq.pan_card = this.PanCard;
        this.BookingReq.adhar_card = this.AdharCard;
        this.BookingReq.licence_no = this.LicenceNo;
        this.BookingReq.light_bill = this.LightBill;
        this.BookingReq.rent_aggrement = this.RentAggrement;
        this.BookingReq.bs = this.BS;
        this.BookingReq.itr = this.ITR;
        this.BookingReq.native_light_bill = this.NativeLightBill;
        //this.BookingReq.firm_name = this.FirmName;
        this.BookingReq.selectedDate = moment(this.selectedDate.toString()).format('YYYY-MM-DD');

        this.BookingReq.guarantor_pan = this.GuarantorPan;
        this.BookingReq.guarantor_adhar = this.GuarantorAdhar;
        this.BookingReq.guarantor_light_bill = this.GuarantorLightBill;
        this.BookingReq.garantor_rent_aggrement = this.GuarantorRentAggrement;
        this.BookingReq.guarantor_BS = this.GuarantorBS;
        //this.BookingReq.guarantor_ITR = this.GuarantorITR;
        this.BookingReq.unit = this.Unit;

        this.BookingReq.guarantor1_pancard = this.Guarantor1PanCard;
        this.BookingReq.guarantor1_adharcard = this.Guarantor1AdharCard;
        this.BookingReq.guarantor1_lightbill = this.Guarantor1LightBill;
        this.BookingReq.guarantor1_rent_aggrement = this.Guarantor1RentAggrement;
        this.BookingReq.guarantor1_BS = this.Guarantor1BS;
        //this.BookingReq.guarantor1_ITR = this.Guarantor1ITR;
        this.BookingReq.unit1 = this.Unit1;
        //this.BookingReq.status = true;
         this.BookingReq.status = this.Active;

       
        this.authService.saveBookingRequest(this.BookingReq).then((result) => {
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
