import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the VehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {

  loading: any;

   Code: any;
   Name: any;
   Description: string = '';

   Active: boolean = false;
   //status_data: any;
  

   VehicleReq = { code: '', name: '', description: '', status: false}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }

textAreaEmpty(){
  if (this.Description != '') {
    console.log(this.Description);
  }
  if (this.Active != true) {
     console.log(this.Active);
    }
}
  ionViewDidLoad() {
   
  }
    compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
   saveVehicleRequest(){
        if (this.Code == undefined) {
             this.showAlert('Message', 'Code is Mandatory.');
            return;
        }
        if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }

        this.showLoader();
       
        this.VehicleReq.code = this.Code;
        this.VehicleReq.name = this.Name;
        this.VehicleReq.description = this.Description;
        this.VehicleReq.status = this.Active;

        this.authService.saveVehicleRequest(this.VehicleReq).then((result) => {
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
