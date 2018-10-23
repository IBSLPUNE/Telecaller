import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the EnquiryListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry-list-detail',
  templateUrl: 'enquiry-list-detail.html',
})
export class EnquiryListDetailPage {
  loading:any;
  enquiry_data: any;

    enquiry_req_data = {
			id: '',
			mobile_no: '',
			name_first: '',
			middle_name : '',
			last_name: '',
			address: '',
			place: '',
			email: '',
			user_id: '',
			scheme_id: '',
			scheme_name: '',
      enquiry_date: '',
      description: '',
      employee_name: ''
	};
       schemeId: any;
       
 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl : ViewController) {
  this.schemeId = this.navParams.get('scheme_id');
  this.getEnquiryWiseSchemes();
  
  }

  ionViewDidLoad() {
      this.enquiry_req_data.id = this.navParams.get('id');
	    this.enquiry_req_data.mobile_no = this.navParams.get('mobile_no');
		  this.enquiry_req_data.name_first = this.navParams.get('name_first');
	    this.enquiry_req_data.middle_name = this.navParams.get('middle_name');
		  this.enquiry_req_data.last_name = this.navParams.get('last_name');
		  this.enquiry_req_data.address = this.navParams.get('address');
		  this.enquiry_req_data.place = this.navParams.get('place');
		  this.enquiry_req_data.email = this.navParams.get('email');
		  this.enquiry_req_data.user_id = this.navParams.get('user_id');
	    this.enquiry_req_data.scheme_id = this.navParams.get('scheme_id');
	    this.enquiry_req_data.scheme_name = this.navParams.get('scheme_name');
	    this.enquiry_req_data.enquiry_date = this.navParams.get('enquiry_date');
      this.enquiry_req_data.description = this.navParams.get('description');
      this.enquiry_req_data.employee_name = this.navParams.get('employee_name');
    console.log('ionViewDidLoad EnquiryListDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }
  getEnquiryWiseSchemes(){
        this.showLoader();
            this.authService.getEnquiryWiseSchemes(this.schemeId).then((result) => {
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
}
