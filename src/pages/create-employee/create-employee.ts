import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the CreateEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-employee',
  templateUrl: 'create-employee.html',
})
export class CreateEmployeePage {
  loading: any;

   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();

   company_type_data: Array<{ value: string, text: string }> = [];
   company_type: any;
   companytype: any;

   branch_type_data: Array<{ value: string, text: string }> = [];
   branch_type: any;
   branchtype: any;

   Code: string = '';
   firstName: any;
   middleName: string = '';
   lastName: string = '';
  
   Email: string = '';
   ContactNo: string = '';
   blood_group: string = '';
  
   Address: string = '';
   pinCode: string = '';
   City: string = '';
   AdharCard: string = '';
  
   gender: any;
   gender_data: any;

   Active: boolean = false;
   //   status_data: any;
   
   prefix: any;
   prefix_data: any;

   county: any;
   county_type_data: any;

   state: any;
   state_type_data: any;

   district: any;
   district_type_data: any;

   EmployeeReq = { code: '', prefix: '', first_name: '', middle_name: '', last_name: '', gender: '', email: '', contact_no: '', blood_group: '', selectedDate: '', address: '', pin_code: '', county: '', state: '', district: '', city: '', adhar_no: '', status: false, company_type: '', branch_type: '' }

//employee_id: '', manager1_id: '', manager2_id: '',
   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
      this.getCompanyProfile();
      this.prefix_data = [
            { text: 'Select prefix Type', value: '' },
            { text: 'Mr.', value: 'Mr.' },  
            { text: 'Mrs.', value: 'Mrs.' },  
            { text: 'Miss.', value: 'Miss.' }
            
        ];
         this.prefix = { text: 'Select prefix Type', value: '' };

      /*this.status_data = [
       *     { text: 'Select Status Type', value: '' },
       *     { text: 'Active', value: 'true' },  
       *     { text: 'Inactive', value: 'false' }
            
       * ];
         this.status = { text: 'Select Status Type', value: '' }; */

      this.county_type_data = [
            { text: 'Select County ', value: '' },
            { text: 'India', value: 'India' }
            
        ];
         this.county = { text: 'Select County', value: '' };

      this.state_type_data = [
            { text: 'Select State', value: '' },
            { text: 'Maharashtra', value: 'Maharashtra' }
            
        ];
         this.state = { text: 'Select State', value: '' };

      this.district_type_data = [
            { text: 'Select District', value: '' },
            { text: 'Mumbai', value: 'Mumbai' },  
            { text: 'Pune', value: 'Pune' }
            
        ];
         this.district = { text: 'Select District', value: '' };

      this.selectedDate = new Date();
      this.date_Min.setMonth(-500, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 1);
  }
   textAreaEmpty(){
    if (this.Code != '') {
     console.log(this.Code);
    }
    if (this.middleName != '') {
     console.log(this.middleName);
    }
    if (this.middleName != '') {
     console.log(this.middleName);
    }
    if (this.Email != '') {
     console.log(this.Email);
    }
    if (this.ContactNo != '') {
     console.log(this.ContactNo);
    }
    if (this.blood_group != '') {
     console.log(this.blood_group);
    }
     if (this.Address != '') {
     console.log(this.Address);
    }
    if (this.pinCode != '') {
     console.log(this.pinCode);
    }
    if (this.City != '') {
     console.log(this.City);
    }
    if (this.AdharCard != '') {
     console.log(this.AdharCard);
    }
     if (this.Active != true) {
     console.log(this.Active);
    }
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad CreateEmployeePage');


     this.gender_data = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender = { text: 'Male', value: 'Male' };

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

            this.getBranchDetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getBranchDetails() {
      //  this.showLoader();
        this.authService.getBranchDetails().then((result) => {
           // this.loading.dismiss();

            this.branchtype = result;

            this.branch_type_data.push({ value: '', text: 'Select Branch' });

            for (let i = 0; i < this.branchtype.length; i++) {
                this.branch_type_data.push({ value: this.branchtype[i].id, text: this.branchtype[i].name });
            }

            this.branch_type = { text: 'Select Branch', value: '' };

           
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
  
   dateChanged() {
       // this.getEmployeePlanList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
     saveEmployeeRequest(){
        if (this.firstName == undefined) {
             this.showAlert('Message', 'First name is Mandatory.');
            return;
        }
         if (this.Email == undefined) {
             this.showAlert('Message', 'Email is Mandatory.');
            return;
        }
        if (this.company_type.value == '') {
             this.showAlert('Message', 'Please Select Company.');
            return;
        } 
        if (this.branch_type.value == '') {
             this.showAlert('Message', 'Please Select Branch.');
            return;
        } 
       
        this.showLoader();
       
        this.EmployeeReq.code = this.Code;
        this.EmployeeReq.prefix = this.prefix.value;
        this.EmployeeReq.first_name = this.firstName;
        this.EmployeeReq.middle_name = this.middleName;
        this.EmployeeReq.last_name = this.lastName;
        this.EmployeeReq.gender = this.gender.value;
        this.EmployeeReq.email = this.Email;
        this.EmployeeReq.contact_no = this.ContactNo;
        this.EmployeeReq.blood_group = this.blood_group;
        this.EmployeeReq.selectedDate = moment(this.selectedDate.toString()).format('YYYY-MM-DD');
        this.EmployeeReq.address = this.Address;
        this.EmployeeReq.pin_code = this.pinCode;
        this.EmployeeReq.county = this.county.value;
        this.EmployeeReq.state = this.state.value;
        this.EmployeeReq.district = this.district.value;
        this.EmployeeReq.city = this.City;
        this.EmployeeReq.adhar_no = this.AdharCard;
        this.EmployeeReq.status = this.Active;
        this.EmployeeReq.company_type = this.company_type.value;
        this.EmployeeReq.branch_type = this.branch_type.value;

        this.authService.saveEmployeeRequest(this.EmployeeReq).then((result) => {
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
