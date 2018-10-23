import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ShowroomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showroom-detail',
  templateUrl: 'showroom-detail.html',
})
export class ShowroomDetailPage {

    showroom_data = {
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
      this.showroom_data.id = this.navParams.get('id');
	    this.showroom_data.code = this.navParams.get('code');
	  	this.showroom_data.name = this.navParams.get('name');
	    this.showroom_data.description = this.navParams.get('description');
	    this.showroom_data.pin_code = this.navParams.get('pin_code');
      this.showroom_data.place = this.navParams.get('place');
      this.showroom_data.address = this.navParams.get('address');
      this.showroom_data.contact_no = this.navParams.get('contact_no');
      this.showroom_data.email = this.navParams.get('email');
      this.showroom_data.contact_person = this.navParams.get('contact_person');
      this.showroom_data.status = this.navParams.get('status');
      this.showroom_data.branch = this.navParams.get('branch');
	
    console.log('ionViewDidLoad ShowroomDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }

}
