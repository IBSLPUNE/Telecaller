import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the AgentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-list',
  templateUrl: 'agent-list.html',
})
export class AgentListPage {
  
  loading: any;
  agent_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private   modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
         this.getAgentList();
         }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentListPage');
  }
   showNewAgentRequest(){
     var AgentPagemodalPage = this.modalCtrl.create('AgentPage');
         AgentPagemodalPage.onDidDismiss(data => {
         this.getAgentList(); 
        });
        AgentPagemodalPage.present();
    }
    getAgentList(){
        this.showLoader();
            this.authService.getAgentList().then((result) => {
            this.loading.dismiss();
            this.agent_data = result;
            
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
    cancelAgentRequest(agent_id) {
       // this.showLoader();
        this.authService.cancelAgentRequest(agent_id).then((result) => {
            //this.loading.dismiss();

            this.getAgentList();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(agent_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelAgentRequest(agent_id);
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
