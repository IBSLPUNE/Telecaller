import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BookingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-detail',
  templateUrl: 'booking-detail.html',
})
export class BookingDetailPage {
     book_data = {
            id: '',
            pan: '',
            adhar: '',
            licence: '',
            light_bill: '',
            rent_agr: '',
            bs: '',
            itr: '',
            native_light_bill: '',
            pan_guarantor: '',
            adhar_guarantor: '',
            light_bill_guarantor: '',
            rent_agr_guarantor: '',
            bs_guarantor: '',
            itr_guarantor: '',
            pan_guarantor1: '',
            adhar_guarantor1: '',
            light_bill_guarantor1: '',
            rent_agr_guarantor1: '',
            bs_guarantor1: '',
            itr_guarantor1: '',
            status: '',
            enquiry_id: '',
            vehicle_type_id: '',
            phone_number: '',
            date: '',
            enquiry_pre: '',
            enquiry_mnm: '',
            enquiry_lnm: '',
            executive_pre: '',
            executive_fnm: '',
            executive_lnm: '',
            agent_fnm: '',
            agent_mnm: '',
            agent_lnm: '',
            created_by_pre: '',
            created_by_fnm: '',
            created_by_lnm: ''
            };


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() { 
      this.book_data.id = this.navParams.get('id');
	    this.book_data.pan = this.navParams.get('pan');
		  this.book_data.adhar = this.navParams.get('adhar');
	    this.book_data.licence = this.navParams.get('licence');
		  this.book_data.light_bill = this.navParams.get('light_bill');
		  this.book_data.rent_agr = this.navParams.get('rent_agr');
	    this.book_data.bs = this.navParams.get('bs');
	    this.book_data.itr = this.navParams.get('itr');
		  this.book_data.native_light_bill = this.navParams.get('native_light_bill');
	    this.book_data.pan_guarantor = this.navParams.get('pan_guarantor');
		  this.book_data.adhar_guarantor = this.navParams.get('adhar_guarantor');
		  this.book_data.light_bill_guarantor = this.navParams.get('light_bill_guarantor');
	    this.book_data.rent_agr_guarantor = this.navParams.get('rent_agr_guarantor');
		  this.book_data.bs_guarantor = this.navParams.get('bs_guarantor');
	    this.book_data.itr_guarantor = this.navParams.get('itr_guarantor');
		  this.book_data.pan_guarantor1 = this.navParams.get('pan_guarantor1');
	   	this.book_data.adhar_guarantor1 = this.navParams.get('adhar_guarantor1');
	    this.book_data.light_bill_guarantor1 = this.navParams.get('light_bill_guarantor1');
		  this.book_data.rent_agr_guarantor1 = this.navParams.get('rent_agr_guarantor1');
	    this.book_data.bs_guarantor1 = this.navParams.get('bs_guarantor1');
	    this.book_data.itr_guarantor1 = this.navParams.get('itr_guarantor1');
		  this.book_data.status = this.navParams.get('status');
		  this.book_data.enquiry_id = this.navParams.get('enquiry_id');
		  this.book_data.vehicle_type_id = this.navParams.get('vehicle_type_id');
      this.book_data.phone_number = this.navParams.get('phone_number');
      this.book_data.date = this.navParams.get('date');
      this.book_data.enquiry_pre = this.navParams.get('light_bill_guarantor1');
      this.book_data.enquiry_mnm = this.navParams.get('enquiry_mnm');
      this.book_data.enquiry_lnm = this.navParams.get('enquiry_lnm');
      this.book_data.executive_pre = this.navParams.get('executive_pre');
      this.book_data.executive_fnm = this.navParams.get('executive_fnm');
      this.book_data.executive_lnm = this.navParams.get('executive_lnm');
      this.book_data.agent_fnm = this.navParams.get('agent_fnm');
      this.book_data.agent_mnm = this.navParams.get('agent_mnm');
      this.book_data.agent_lnm = this.navParams.get('agent_lnm');
      this.book_data.created_by_pre = this.navParams.get('created_by_pre');
      this.book_data.created_by_fnm = this.navParams.get('created_by_fnm');
      this.book_data.created_by_lnm = this.navParams.get('created_by_lnm');
    console.log('ionViewDidLoad BookingDetailPage');
  }
   public closeModal(){
  this.viewCtrl.dismiss();
  }


}
