import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the FinancerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financer-list',
  templateUrl: 'financer-list.html',
})
export class FinancerListPage {

   loading: any;
   financer_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getFinancerDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancerListPage');
  }
  getFinancerDetails(){
   this.showLoader();
            this.authService.getFinancerDetails().then((result) => {
            this.loading.dismiss();
            this.financer_data = result;
            
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

    showModalDialog(financer_data) {
        var data = {
            id: financer_data.id,
            code: financer_data.code,
            name: financer_data.name,
            description: financer_data.description,
            pin_code: financer_data.pin_code,
            place: financer_data.place,
            address: financer_data.address,
            contact_no: financer_data.contact_no,
            email: financer_data.email,
            contact_person: financer_data.contact_person,
            status: financer_data.status,
            branch: financer_data.branch
        };
       
     
        var DetailsmodalPage = this.popoverCtrl.create('FinancerDetailsPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getFinancerDetails();
        });
        DetailsmodalPage.present();
    }
    showNewFinancerRequest(){
      var FinancerRequestPagemodalPage = this.modalCtrl.create('FinancerPage');
      
       
        FinancerRequestPagemodalPage.onDidDismiss(data => {
        this.getFinancerDetails();
    
           
        });
        FinancerRequestPagemodalPage.present();
    }
    cancelFinancerRequest(financer_id) {
       // this.showLoader();
        this.authService.cancelFinancerRequest(financer_id).then((result) => {
            //this.loading.dismiss();

            this.getFinancerDetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(financer_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelFinancerRequest(financer_id);
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
