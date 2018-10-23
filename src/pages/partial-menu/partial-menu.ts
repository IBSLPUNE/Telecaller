import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PartialMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partial-menu',
  templateUrl: 'partial-menu.html',
})
export class PartialMenuPage {

    bAdmin: any;
   
    menu: any = 'MenuPage';
    admin_menu: any = 'AdminMenuPage';
    

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    /*swipeEvent(e) {
        if (e.direction == 2) {
            this.navCtrl.parent.select(1);
        }
        else if (e.direction == 4) {
            this.navCtrl.parent.select(0);
        }
    }*/

    /*swipeEvent(e) {
        if (e.direction == 2) {
            this.tab.select(1);
        }
        else if (e.direction == 4) {
            this.tab.select(0);
        }
    }*/

    ionViewDidLoad() {
        //console.log('ionViewDidLoad PartialMenuPage');
        if (localStorage.getItem('empRole') == 'Branch') {
            this.bAdmin = false;  
        }
        else {
            this.bAdmin = true;
        }
    }
}
