import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the BranchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branch-list',
  templateUrl: 'branch-list.html',
})
export class BranchListPage {
   loading: any;
   branch_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getBranchDetails();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchListPage');
  }
 getBranchDetails(){
   this.showLoader();
            this.authService.getBranchDetails().then((result) => {
            this.loading.dismiss();
            this.branch_data = result;
            
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

   showModalDialog(branch_data) {
    var data = {
            id: branch_data.id,
            code: branch_data.code,
            name: branch_data.name,
            address: branch_data.address,
            contact_no: branch_data.contact_no,
            status: branch_data.status,
            email: branch_data.email,
            company: branch_data.company
        };
       
     
        var DetailsmodalPage = this.popoverCtrl.create('BranchDetailPage', data, { cssClass: 'clsPopup' });
        DetailsmodalPage.onDidDismiss(() => {
            this.getBranchDetails();
        });
        DetailsmodalPage.present();
    }
    showNewBranchRequest(){
     var BranchRequestPagemodalPage = this.modalCtrl.create('BranchPage');
      
       
        BranchRequestPagemodalPage.onDidDismiss(data => {
        this.getBranchDetails();
    
           
        });
        BranchRequestPagemodalPage.present();
    }

}
