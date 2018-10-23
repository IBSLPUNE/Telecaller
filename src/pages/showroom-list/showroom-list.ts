import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ShowroomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showroom-list',
  templateUrl: 'showroom-list.html',
})
export class ShowroomListPage {

    loading: any;
   showroom_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getShowroomDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowroomListPage');
  }
  getShowroomDetails(){
   this.showLoader();
            this.authService.getShowroomDetails().then((result) => {
            this.loading.dismiss();
            this.showroom_data = result;
            
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

    showModalDialog(showroom_data) {
        var data = {
            id: showroom_data.id,
            code: showroom_data.code,
            name: showroom_data.name,
            description: showroom_data.description,
            pin_code: showroom_data.pin_code,
            place: showroom_data.place,
            address: showroom_data.address,
            contact_no: showroom_data.contact_no,
            email: showroom_data.email,
            contact_person: showroom_data.contact_person,
            status: showroom_data.status,
            branch: showroom_data.branch
        };
     
        var DetailsmodalPage = this.popoverCtrl.create('ShowroomDetailPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getShowroomDetails();
        });
        DetailsmodalPage.present();
    }
    showNewShowroomRequest(){
     var ShowroomRequestPagemodalPage = this.modalCtrl.create('ShowroomPage');
      
       
        ShowroomRequestPagemodalPage.onDidDismiss(data => {
        this.getShowroomDetails();
    
           
        });
        ShowroomRequestPagemodalPage.present();
    }
    cancelShowroomRequest(showroom_id) {
       // this.showLoader();
        this.authService.cancelShowroomRequest(showroom_id).then((result) => {
            //this.loading.dismiss();

            this.getShowroomDetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(showroom_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelShowroomRequest(showroom_id);
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
