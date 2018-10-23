import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {

  loading: any;

   Code: any;
   Name: any;
   Description: string = '';

   Active: boolean = false;
   //status_data: any;

   DocumentReq = { code: '', name: '', description: '', status: false}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }
  textAreaEmpty(){
    if (this.Description != '') {
     console.log(this.Description);
    }
  }
  ionViewDidLoad() {
   /* this.status_data = [
       *    { text: 'Select Status Type', value: '' },
       *    { text: 'Active', value: 'true' },  
       *    { text: 'Inactive', value: 'false' }
            
        *];
         this.status = { text: 'Select Status Type', value: '' }; */
  }
  compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
  saveDocumentRequest(){
        if (this.Code == undefined) {
             this.showAlert('Message', 'Code is Mandatory.');
            return;
        }
        if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }

        this.showLoader();
       
        this.DocumentReq.code = this.Code;
        this.DocumentReq.name = this.Name;
        this.DocumentReq.description = this.Description;
        this.DocumentReq.status = this.Active;

        this.authService.saveDocumentRequest(this.DocumentReq).then((result) => {
            this.loading.dismiss();

          if (result["status"].toLowerCase().indexOf('success') >= 0) {
                this.showAlert('success', result["status"]);
                 this.closeModal();
            } 
            else
            {
                this.showAlert('success', result["status"]);
            }
          }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });

    }
     public closeModal() {

        this.viewCtrl.dismiss();
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
      showAlert(title, text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

}
