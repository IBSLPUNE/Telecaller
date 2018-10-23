import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DocumentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-list',
  templateUrl: 'document-list.html',
})
export class DocumentListPage {

   loading: any;
   document_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getDocumentDetails();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentListPage');
  }
    getDocumentDetails(){
        this.showLoader();
            this.authService.getDocumentDetails().then((result) => {
            this.loading.dismiss();
            this.document_data = result;
            
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

   showModalDialog(document_data) {
    var data = {
            id: document_data.id,
            code: document_data.code,
            name: document_data.name,
            description: document_data.description,
            status: document_data.status
        };
        var DetailsmodalPage = this.popoverCtrl.create('DocumentDetailPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getDocumentDetails();
        });
        DetailsmodalPage.present();
    }
    showNewDocumentRequest(){
     var DocumentPagemodalPage = this.modalCtrl.create('DocumentPage');
      
       
        DocumentPagemodalPage.onDidDismiss(data => {
        this.getDocumentDetails();
    
           
        });
        DocumentPagemodalPage.present();
    }
    cancelDocumentRequest(document_id) {
       // this.showLoader();
        this.authService.cancelDocumentRequest(document_id).then((result) => {
            //this.loading.dismiss();

            this.getDocumentDetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(document_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelDocumentRequest(document_id);
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
