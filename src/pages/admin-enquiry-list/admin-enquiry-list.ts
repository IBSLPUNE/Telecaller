import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EnquiryListDetailPage } from '../enquiry-list-detail/enquiry-list-detail';
import moment from 'moment';
/**
 * Generated class for the AdminEnquiryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-enquiry-list',
  templateUrl: 'admin-enquiry-list.html',
})
export class AdminEnquiryListPage {

  loading:any;
  enquiry_data: any;

    date_Max1: any;
   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();
   selectedDate1: Date = new Date();

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
       //this.date_Max1 = ((new Date()).getFullYear() + 5).toString();
        //this.selectedDate1 = new Date().toISOString();
        this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
         this.getEnquiryList();
  }
   dateChanged() {
        this.getEnquiryList();
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
    console.log('ionViewDidLoad AdminEnquiryListPage');
  }

   getEnquiryList(){
        this.showLoader();
            this.authService.getEnquiryList(moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.enquiry_data = result;
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
    showModalDialog(enquiry_req_data)
    {
        var data = {
            id: enquiry_req_data.id,
            mobile_no: enquiry_req_data.mobile_no,
            name_first: enquiry_req_data.name_first,
            middle_name: enquiry_req_data.middle_name,
            last_name: enquiry_req_data.last_name,
            address: enquiry_req_data.address,
            email: enquiry_req_data.email,
            user_id: enquiry_req_data.user_id,
            place: enquiry_req_data.place,
            scheme_id: enquiry_req_data.scheme_id,
            scheme_name: enquiry_req_data.scheme_name,
            enquiry_date: enquiry_req_data.enquiry_date,
            description: enquiry_req_data.description,
            employee_name: enquiry_req_data.employee_name 
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(EnquiryListDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
        this.getEnquiryList();

    }

}
