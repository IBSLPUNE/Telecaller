import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';

/**
 * Generated class for the BookingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.html',
})
export class BookingListPage {

   loading: any;
   booking_data: any;

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
        this.getParticularBookingDetails();
 }
  dateChanged() {
        this.getParticularBookingDetails();
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
    console.log('ionViewDidLoad DocumentListPage');
  }
    getParticularBookingDetails(){
        this.showLoader();
            this.authService.getParticularBookingDetails(localStorage.getItem('member_id'),moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.booking_data = result;
            
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

    showModalDialog(book_data) {
        var data = {
            id: book_data.id,
            pan: book_data.pan,
            adhar: book_data.adhar,
            licence: book_data.licence,
            light_bill: book_data.light_bill,
            rent_agr: book_data.rent_agr,
            bs: book_data.bs,
            itr: book_data.itr,
            native_light_bill: book_data.native_light_bill,
            pan_guarantor: book_data.pan_guarantor,
            adhar_guarantor: book_data.adhar_guarantor,
            light_bill_guarantor: book_data.light_bill_guarantor,
            rent_agr_guarantor: book_data.rent_agr_guarantor,
            bs_guarantor: book_data.bs_guarantor,
            itr_guarantor: book_data.itr_guarantor,
            pan_guarantor1: book_data.pan_guarantor1,
            adhar_guarantor1: book_data.adhar_guarantor1,
            light_bill_guarantor1: book_data.light_bill_guarantor1,
            rent_agr_guarantor1: book_data.rent_agr_guarantor1,
            bs_guarantor1: book_data.bs_guarantor1,
            itr_guarantor1: book_data.itr_guarantor1,
            status: book_data.status,
            enquiry_id: book_data.enquiry_id,
            vehicle_type_id: book_data.vehicle_type_id,
            phone_number: book_data.phone_number,
            date: book_data.date,
            enquiry_pre: book_data.enquiry_pre,
            enquiry_mnm: book_data.enquiry_mnm,
            enquiry_lnm: book_data.enquiry_lnm,
            executive_pre: book_data.executive_pre,
            executive_fnm: book_data.executive_fnm,
            executive_lnm: book_data.executive_lnm,
            agent_fnm: book_data.agent_fnm,
            agent_mnm: book_data.agent_mnm,
            agent_lnm: book_data.agent_lnm,
            created_by_pre: book_data.created_by_pre,
            created_by_fnm:book_data.created_by_fnm,
            created_by_lnm:book_data.created_by_lnm
        };
        var DetailsmodalPage = this.popoverCtrl.create('BookingDetailPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getParticularBookingDetails();
        });
        DetailsmodalPage.present();
    }
    showNewBookRequest(){
     var BookPagemodalPage = this.modalCtrl.create('BookingPage');
      
       
        BookPagemodalPage.onDidDismiss(data => {
        this.getParticularBookingDetails();
    
           
        });
        BookPagemodalPage.present();
    }
}
