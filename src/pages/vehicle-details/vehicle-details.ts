import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VehicleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html',
})
export class VehicleDetailsPage {

  vehicle_data = {
			id: '',
			code: '',
			name: '',
			description : '',
			status: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.vehicle_data.id = this.navParams.get('id');
	    this.vehicle_data.code = this.navParams.get('code');
		this.vehicle_data.name = this.navParams.get('name');
	    this.vehicle_data.description = this.navParams.get('description');
		this.vehicle_data.status = this.navParams.get('status');
	
    console.log('ionViewDidLoad VehicleDetailsPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }

}
