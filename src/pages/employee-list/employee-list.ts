import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EmployeeListDetailPage } from '../employee-list-detail/employee-list-detail';
/**
 * Generated class for the EmployeeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-list',
  templateUrl: 'employee-list.html',
})
export class EmployeeListPage {
 loading:any;
  employee_data: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
      this.getEmployeeList();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeListPage');
  }
  showNewEmployeeRequest(){
    var EmployeeRequestPagemodalPage = this.modalCtrl.create('CreateEmployeePage');
      
       
        EmployeeRequestPagemodalPage.onDidDismiss(data => {
        this.getEmployeeList();
    
           
        });
        EmployeeRequestPagemodalPage.present();
   }
   getEmployeeList(){
        this.showLoader();
            this.authService.getEmployeeList().then((result) => {
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
    showModalDialog(employee_req_data){
    var data = {
            id: employee_req_data.id,
            code: employee_req_data.code,
            prefix: employee_req_data.prefix,
            first_name: employee_req_data.first_name,
            middle_name: employee_req_data.middle_name,
            last_name: employee_req_data.last_name,
            gender: employee_req_data.gender,
            email: employee_req_data.email,
            contact_no: employee_req_data.contact_no,
            blood_group: employee_req_data.blood_group,
            date_of_birth: employee_req_data.date_of_birth,
            address: employee_req_data.address,
            pin_code: employee_req_data.pin_code,
            country: employee_req_data.country,
            state: employee_req_data.state,
            district: employee_req_data.district,
            adhar_no: employee_req_data.adhar_no,
            city: employee_req_data.city,
            status: employee_req_data.status,
            company: employee_req_data.company,
            branch: employee_req_data.branch

        };
       
        var DetailsmodalPage = this.popoverCtrl.create(EmployeeListDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();

    }

}
