import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the FinancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financer',
  templateUrl: 'financer.html',
})
export class FinancerPage {
   loading: any;

   Code: any;
   Name: any;
   Description: string = '';
   PinCode: string = '';
   Place: string = '';
   Address: string = '';
   Email: string = '';
   ContactNo: string = '';
   ContactPerson: string = '';

   branch_type_data: Array<{ value: string, text: string }> = [];
   branch_type: any;
   branchtype: any;

   Active: boolean = false;
   //status_data: any;
  
   FinancerReq = { code: '', name: '',description: '',pin_code: '',place: '', address: '', email: '', contact_no: '',contact_person: '', status: false, branch_type: ''}

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl: ViewController) {
    this.getBranchDetails();

 }
  textAreaEmpty(){
    if (this.Description != '') {
     console.log(this.Description);
    }
     if (this.PinCode != '') {
     console.log(this.PinCode);
    }
     if (this.Place != '') {
     console.log(this.Place);
    }
     if (this.Address != '') {
     console.log(this.Address);
    }
     if (this.Email != '') {
     console.log(this.Email);
    }
     if (this.ContactNo != '') {
     console.log(this.ContactNo);
    }
     if (this.ContactPerson != '') {
     console.log(this.ContactPerson);
    }
     if (this.Active != true) {
     console.log(this.Active);
    }
  }

  ionViewDidLoad() {
     /*this.status_data = [
     *       { text: 'Select Status Type', value: '' },
     *       { text: 'Active', value: 'true' },  
     *       { text: 'Inactive', value: 'false' }
            
      *  ];
         this.status = { text: 'Select Status Type', value: '' };*/
  }
  compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
     getBranchDetails() {
      //  this.showLoader();
        this.authService.getBranchDetails().then((result) => {
           // this.loading.dismiss();

            this.branchtype = result;

            this.branch_type_data.push({ value: '', text: 'Select Branch' });

            for (let i = 0; i < this.branchtype.length; i++) {
                this.branch_type_data.push({ value: this.branchtype[i].id, text: this.branchtype[i].name});
            }
           this.branch_type = { text: 'Select Branch', value: '' };
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    saveFinancerRequest(){
        
        if (this.Code == undefined) {
             this.showAlert('Message', 'Code is Mandatory.');
            return;
        }
          if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }

        this.showLoader();
       
        this.FinancerReq.code = this.Code;
        this.FinancerReq.name = this.Name;
        this.FinancerReq.pin_code = this.PinCode;
        this.FinancerReq.place = this.Place;
        this.FinancerReq.description = this.Description;
        this.FinancerReq.contact_person = this.ContactPerson;
        this.FinancerReq.email = this.Email;
        this.FinancerReq.contact_no = this.ContactNo;
        this.FinancerReq.address = this.Address;
        this.FinancerReq.status = this.Active;
        this.FinancerReq.branch_type = this.branch_type.value;

        this.authService.saveFinancerRequest(this.FinancerReq).then((result) => {
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
