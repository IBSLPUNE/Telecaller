import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
   loading: any;
   employee_data: any;
   userImage: any;
   gender: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
    this.gender = localStorage.getItem('gender'); 
    this.getEmployeeProfile();
    }
    ionViewDidLoad() {
   
    }
    updateUrl() {
      if(this.gender == "Female")
          {
           this.userImage = 'assets/images/female.png';
             
          }
            else{
          this.userImage = 'assets/images/avatar.png';

          }
   
     }

    getEmployeeProfile(){
    this.showLoader();
            this.authService.getEmployeeProfile(localStorage.getItem('member_id')).then((result) => {
            this.loading.dismiss();
            this.employee_data = result;
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
}
