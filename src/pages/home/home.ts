import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PartialMenuPage } from '../partial-menu/partial-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
loading:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
   this.settimeout();
  }
   settimeout() {
        setTimeout(() => {
            
              if (localStorage.getItem('member_id') == undefined) {
                this.navCtrl.setRoot(LoginPage);
            }
         
                else {
                  if (localStorage.getItem('empRole') == 'Branch') {
                    this.navCtrl.setRoot(PartialMenuPage);
                  }
                  else {
                    this.navCtrl.setRoot(PartialMenuPage);
                  }
                }

        }, 2500);
    }

    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });

        this.loading.present();
    }

}
