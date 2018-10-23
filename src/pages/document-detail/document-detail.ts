import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DocumentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-detail',
  templateUrl: 'document-detail.html',
})
export class DocumentDetailPage {

 document_data = {
			id: '',
			code: '',
			name: '',
			description : '',
			status: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.document_data.id = this.navParams.get('id');
	    this.document_data.code = this.navParams.get('code');
		this.document_data.name = this.navParams.get('name');
	    this.document_data.description = this.navParams.get('description');
		this.document_data.status = this.navParams.get('status');
	
    console.log('ionViewDidLoad DocumentDetailPage');
  }
  public closeModal(){
  this.viewCtrl.dismiss();
  }

}
