import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the AgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent',
  templateUrl: 'agent.html',
})
export class AgentPage {

  loading: any;

  Firstname : any;
  Middelname : string = '';
  Lastname : string = '';
  Mobilenumber : string = '';

  Active: boolean = false;
  //status_data: any;

  AgentReq = { first_name: '', middel_name: '', last_name: '', mobile_number: '', status: false}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  }
  textAreaEmpty(){
    if (this.Middelname != '') {
     console.log(this.Middelname);
    }
     if (this.Lastname != '') {
     console.log(this.Lastname);
    }
     if (this.Mobilenumber != '') {
     console.log(this.Mobilenumber);
    }
     if (this.Active != true) {
     console.log(this.Active);
    }
  }

  ionViewDidLoad() {
     /*this.status_data = [
     *       { text: 'Select Status Type', value: '' },
      *      { text: 'Active', value: 'true' },  
       *     { text: 'Inactive', value: 'false' }
            
        *];
         this.status = { text: 'Select Status Type', value: '' };*/
    }
   compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
    saveAgentRequest(){

        if (this.Firstname == undefined) {
             this.showAlert('Message', 'First Name is Mandatory.');
            return;
        }
        if (this.Active == false) {
             this.showAlert('Message', 'Status is Mandatory.');
            return;
        }
        this.showLoader();
       
        this.AgentReq.first_name = this.Firstname;
        this.AgentReq.middel_name = this.Middelname;
        this.AgentReq.last_name = this.Lastname;
        this.AgentReq.mobile_number = this.Mobilenumber;
        this.AgentReq.status = this.Active;

        this.authService.saveAgentRequest(this.AgentReq).then((result) => {
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
