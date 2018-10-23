import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BranchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branch-detail',
  templateUrl: 'branch-detail.html',
})
export class BranchDetailPage {

    branch_data = {
			id: '',
			code: '',
			name: '',
			address : '',
			contact_no: '',
			status: '',
			email: '',
			company: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.branch_data.id = this.navParams.get('id');
	    this.branch_data.code = this.navParams.get('code');
		this.branch_data.name = this.navParams.get('name');
	    this.branch_data.address = this.navParams.get('address');
		this.branch_data.contact_no = this.navParams.get('contact_no');
		this.branch_data.email = this.navParams.get('email');
		this.branch_data.company = this.navParams.get('company');
		this.branch_data.status = this.navParams.get('status');
	
    console.log('ionViewDidLoad BranchDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }
}
