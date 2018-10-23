import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PartialMenuPage } from '../partial-menu/partial-menu';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 loading: any;
   
    data: any;
    serverIP: any;

      loginData = { username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.serverIP = this.authService.serverIP;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 doLogin() {
        this.showLoader();
        this.authService.login(this.loginData).then((result) => {
            this.loading.dismiss();
            this.data = result;
             localStorage.setItem('member_id', this.data.member_id);
             localStorage.setItem('empRole', this.data.role);
             localStorage.setItem('gender', this.data.gender);
             
            if (this.data.role == 'member_id') {
                //console.log('Login successfully.');
                this.navCtrl.setRoot(PartialMenuPage);
            }
            else {
                this.navCtrl.setRoot(PartialMenuPage);
            }
        },
         (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
       showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
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

    showError(text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

}
