import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SchemesListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schemes-list-detail',
  templateUrl: 'schemes-list-detail.html',
})
export class SchemesListDetailPage {

  scheme_req_data = {
			id: '',
			scheme_type: '',
			name: '',
			budget : '',
			down_payment: '',
			installment: '',
			installment_amount: '',
			intrest: '',
			from_date: '',
			to_date: '',
			status: '',
			vehicle_type: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.scheme_req_data.id = this.navParams.get('id');
	    this.scheme_req_data.scheme_type = this.navParams.get('scheme_type');
		this.scheme_req_data.name = this.navParams.get('name');
	    this.scheme_req_data.budget = this.navParams.get('budget');
		this.scheme_req_data.down_payment = this.navParams.get('down_payment');
		this.scheme_req_data.installment = this.navParams.get('installment');
		this.scheme_req_data.installment_amount = this.navParams.get('installment_amount');
		this.scheme_req_data.intrest = this.navParams.get('intrest');
		this.scheme_req_data.from_date = this.navParams.get('from_date');
		this.scheme_req_data.to_date = this.navParams.get('to_date');
		this.scheme_req_data.status = this.navParams.get('status');
	    this.scheme_req_data.vehicle_type = this.navParams.get('vehicle_type');
	    
    console.log('ionViewDidLoad SchemesListDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }

}
