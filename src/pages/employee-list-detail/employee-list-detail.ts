import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EmployeeListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-list-detail',
  templateUrl: 'employee-list-detail.html',
})
export class EmployeeListDetailPage {

  employee_req_data = {
			id: '',
			code: '',
			prefix: '',
			first_name : '',
			middle_name: '',
			last_name: '',
			gender: '',
			email: '',
			contact_no: '',
			blood_group: '',
			date_of_birth: '',
			pin_code: '',
			country : '',
			state: '',
			district: '',
			adhar_no: '',
			city: '',
			status: '',
			company: '',
			branch: '',
			address: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.employee_req_data.id = this.navParams.get('id');
	    this.employee_req_data.code = this.navParams.get('code');
		this.employee_req_data.prefix = this.navParams.get('prefix');
	    this.employee_req_data.first_name = this.navParams.get('first_name');
		this.employee_req_data.middle_name = this.navParams.get('middle_name');
		this.employee_req_data.last_name = this.navParams.get('last_name');
		this.employee_req_data.gender = this.navParams.get('gender');
		this.employee_req_data.email = this.navParams.get('email');
		this.employee_req_data.contact_no = this.navParams.get('contact_no');
		this.employee_req_data.blood_group = this.navParams.get('blood_group');
	    this.employee_req_data.date_of_birth = this.navParams.get('date_of_birth');
		this.employee_req_data.pin_code = this.navParams.get('pin_code');
	    this.employee_req_data.country = this.navParams.get('country');
		this.employee_req_data.state = this.navParams.get('state');
		this.employee_req_data.district = this.navParams.get('district');
		this.employee_req_data.adhar_no = this.navParams.get('adhar_no');
		this.employee_req_data.city = this.navParams.get('city');
		this.employee_req_data.status = this.navParams.get('status');
	    this.employee_req_data.company = this.navParams.get('company');
		this.employee_req_data.branch = this.navParams.get('branch');
	    this.employee_req_data.address = this.navParams.get('address');
	
      console.log('ionViewDidLoad EmployeeListDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }
}
