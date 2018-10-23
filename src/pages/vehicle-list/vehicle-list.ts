import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the VehicleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-list',
  templateUrl: 'vehicle-list.html',
})
export class VehicleListPage {

    loading: any;
   vehicle_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getVehicleDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleListPage');
  }
  getVehicleDetails(){
   this.showLoader();
            this.authService.getVehicleDetails().then((result) => {
            this.loading.dismiss();
            this.vehicle_data = result;
            
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
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

   showModalDialog(vehicle_data) {
    var data = {
            id: vehicle_data.id,
            code: vehicle_data.code,
            name: vehicle_data.name,
            description: vehicle_data.description,
            status: vehicle_data.status
        };
       
     
        var DetailsmodalPage = this.popoverCtrl.create('VehicleDetailsPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getVehicleDetails();
        });
        DetailsmodalPage.present();
    }
    showNewVehicleRequest(){
     var VehicleRequestPagemodalPage = this.modalCtrl.create('VehiclePage');
      
       
        VehicleRequestPagemodalPage.onDidDismiss(data => {
        this.getVehicleDetails();
    
           
        });
        VehicleRequestPagemodalPage.present();
    }
    cancelVehicleRequest(vehicle_id) {
       // this.showLoader();
        this.authService.cancelVehicleRequest(vehicle_id).then((result) => {
            //this.loading.dismiss();

            this.getVehicleDetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(vehicle_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelVehicleRequest(vehicle_id);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }
}
