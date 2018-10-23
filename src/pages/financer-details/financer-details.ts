import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the FinancerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financer-details',
  templateUrl: 'financer-details.html',
})
export class FinancerDetailsPage {

  financer_data = {
			id: '',
			code: '',
			name: '',
			description : '',
      pin_code: '',
      place: '',
      address: '',
      contact_no: '',
      email: '',
      contact_person: '',
			status: '',
      branch: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.financer_data.id = this.navParams.get('id');
	      this.financer_data.code = this.navParams.get('code');
		    this.financer_data.name = this.navParams.get('name');
	      this.financer_data.description = this.navParams.get('description');
	    	this.financer_data.pin_code = this.navParams.get('pin_code');
        this.financer_data.place = this.navParams.get('place');
        this.financer_data.address = this.navParams.get('address');
        this.financer_data.contact_no = this.navParams.get('contact_no');
        this.financer_data.email = this.navParams.get('email');
        this.financer_data.contact_person = this.navParams.get('contact_person');
        this.financer_data.status = this.navParams.get('status');
        this.financer_data.branch = this.navParams.get('branch');
	
    console.log('ionViewDidLoad FinancerDetailsPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }

}
