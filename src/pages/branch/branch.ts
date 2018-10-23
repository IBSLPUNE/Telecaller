import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the BranchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branch',
  templateUrl: 'branch.html',
})
export class BranchPage {
   loading: any;

   company_type_data: Array<{ value: string, text: string }> = [];
   company_type: any;
   companytype: any;

   BranchCode: any;
   Name: any;
   Address: string = '';
   Email: string = '';
   ContactNo: string = '';

   Active: boolean = false;
   //status_data: any;
  
   BranchReq = { branch_code: '', name: '', address: '', email: '', contact_no: '', status: false, company_type: ''}

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl: ViewController) {
         this.getCompanyProfile();
 }
   textAreaEmpty(){
    if (this.Address != '') {
     console.log(this.Address);
    }
    if (this.Email != '') {
     console.log(this.Email);
    }
    if (this.ContactNo != '') {
     console.log(this.ContactNo);
    }
    if (this.Active != true) {
     console.log(this.Active);
    }
  }


  ionViewDidLoad() {
    
  }
    getCompanyProfile() {
        //this.showLoader();
        this.authService.getCompanyProfile().then((result) => {
           // this.loading.dismiss();

            this.companytype = result;

            this.company_type_data.push({ value: '', text: 'Select Company' });

            for (let i = 0; i < this.companytype.length; i++) {
                this.company_type_data.push({ value: this.companytype[i].id, text: this.companytype[i].name });
            }

            this.company_type = { text: 'Select Company', value: '' };

        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }

    saveBranchRequest(){

  
          if (this.BranchCode == undefined) {
             this.showAlert('Message', 'Branch Code is Mandatory.');
            return;
        }
          if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }

        this.showLoader();
       
        this.BranchReq.branch_code = this.BranchCode;
        this.BranchReq.name = this.Name;
        this.BranchReq.email = this.Email;
        this.BranchReq.contact_no = this.ContactNo;
        this.BranchReq.address = this.Address;
        this.BranchReq.status = this.Active;
        this.BranchReq.company_type = this.company_type.value;

        this.authService.saveBranchRequest(this.BranchReq).then((result) => {
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
