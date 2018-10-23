import { App } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

    // public serverIP ='http://192.168.0.37:3002'; 
    // public serverIP ='http://54.169.157.50'; 
    // public serverIP ='http://192.168.14.135:3000'; //tanuja 
       public serverIP ='http://192.168.5.189:3000'; //santosh

  public apiUrl_user_auths = this.serverIP + '/api/user_auths/';   //api server

  constructor(public http: Http, public _app: App) {
    console.log('Hello AuthServiceProvider Provider');
  }
    login(credentials) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
            body.append('email', credentials.username);
            body.append('password', credentials.password);

            this.http.post(this.apiUrl_user_auths + 'user_sign_in', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     Logout() {
        localStorage.removeItem('member_id');
        this._app.getRootNavs()[0].setRoot(LoginPage);
    }
     getEmployeeProfile(member_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'current_employee?employee_id=' + member_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getCompanyProfile() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'company_profile')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getBranchDetails(){
       return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'branch_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
     getBloodGroupType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'blood_group_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getCountyType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'contries_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getStateType(county_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'state_list?country_id=' + county_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getDistrictType(state_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'districts_list?state_id=' + state_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     saveEmployeeRequest(EmployeeReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', EmployeeReq.code);
            body.append('prefix', EmployeeReq.prefix);
            body.append('first_name', EmployeeReq.first_name);
            body.append('middle_name', EmployeeReq.middle_name);
            body.append('last_name', EmployeeReq.last_name);
            body.append('gender', EmployeeReq.gender); 
            body.append('email', EmployeeReq.email);
            body.append('contact_no', EmployeeReq.contact_no);
            body.append('blood_group', EmployeeReq.blood_group);
            body.append('date_of_birth', EmployeeReq.selectedDate);
            body.append('address', EmployeeReq.address);
            body.append('pin_code', EmployeeReq.pin_code);
            body.append('county', EmployeeReq.county);
            body.append('state', EmployeeReq.state);
            body.append('district', EmployeeReq.district);
            body.append('city', EmployeeReq.city);
            body.append('adhar_no', EmployeeReq.adhar_no);
            body.append('status', EmployeeReq.status);
            body.append('company_id', EmployeeReq.company_type);
            body.append('branch_id', EmployeeReq.branch_type);
           
            this.http.post(this.apiUrl_user_auths + 'create_employee1', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveBranchRequest(BranchReq){
       return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('branch_code', BranchReq.branch_code);
            body.append('name', BranchReq.name);
            body.append('address', BranchReq.address);
            body.append('email', BranchReq.email);
            body.append('contact_no', BranchReq.contact_no);
            body.append('status', BranchReq.status); 
            body.append('company_id', BranchReq.company_type);
           
           
            this.http.post(this.apiUrl_user_auths + 'create_branch', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
    saveEnquiryRequest(EnquiryReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('first_name', EnquiryReq.first_name);
            body.append('middle_name', EnquiryReq.middle_name);
            body.append('last_name', EnquiryReq.last_name);
            body.append('email', EnquiryReq.email);
            body.append('mobile_no', EnquiryReq.mobile_no);
            body.append('address', EnquiryReq.address);
            body.append('place', EnquiryReq.place);
            body.append('description', EnquiryReq.description);
            body.append('user_id', EnquiryReq.member_id);
            body.append('date', EnquiryReq.selectedDate);
            body.append('scheme_id', EnquiryReq.scheme_type);
            body.append('status', EnquiryReq.status);
           
            this.http.post(this.apiUrl_user_auths + 'create_enquiry', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
    saveSchemeRequest(SchemeReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('vehicle_id', SchemeReq.vehicle_type);
            body.append('name', SchemeReq.name);
            body.append('budget', SchemeReq.budget);
            body.append('down_payment', SchemeReq.down_payment);
            body.append('installment', SchemeReq.installment);
            body.append('installment_amount', SchemeReq.installment_amount);
            body.append('intrest', SchemeReq.intrest);
            body.append('from_date', SchemeReq.from_date);
            body.append('to_date', SchemeReq.to_date);
            body.append('status', SchemeReq.status);

            this.http.post(this.apiUrl_user_auths + 'create_scheme', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getEnquiryList(selectedDate,selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'enquiry_list?fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getParticularEnquiryList(member_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'particular_enquiry_list?member_id=' + member_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getEmployeeList(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'employee_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAllSchemeList(selectedDate, selectedDate1){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'date_wise_schemes_list?fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getPerticularSchemeList(member_id, selectedDate, selectedDate1){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'particular_date_wise_schemes_list?employee_id=' + member_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getSchemeList(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'schemes_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getEnquiryWiseSchemes(schemeId){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'enquiry_wise_schemes?scheme_id=' + schemeId)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveVehicleRequest(VehicleReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', VehicleReq.code);
            body.append('name', VehicleReq.name);
            body.append('description', VehicleReq.description);
            body.append('status', VehicleReq.status); 
           
            this.http.post(this.apiUrl_user_auths + 'create_vehicle', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getVehicleDetails(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_vehical_type')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
    getDocumentDetails(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_document_master')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveDocumentRequest(DocumentReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', DocumentReq.code);
            body.append('name', DocumentReq.name);
            body.append('description', DocumentReq.description);
            body.append('status', DocumentReq.status); 
           
            this.http.post(this.apiUrl_user_auths + 'create_document_master', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getFinancerDetails(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_financer_master')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveFinancerRequest(FinancerReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', FinancerReq.code);
            body.append('name', FinancerReq.name);
            body.append('description', FinancerReq.description);
            body.append('pin_code', FinancerReq.pin_code);
            body.append('place', FinancerReq.place);
            body.append('address', FinancerReq.address);
            body.append('contact_no', FinancerReq.contact_no);
            body.append('contact_person', FinancerReq.contact_person);
            body.append('email', FinancerReq.email);
            body.append('status', FinancerReq.status); 
            body.append('branch_id', FinancerReq.branch_type); 
           
            this.http.post(this.apiUrl_user_auths + 'create_financer_master', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getShowroomDetails(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_showroom_master')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     saveShowroomRequest(ShowroomReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', ShowroomReq.code);
            body.append('name', ShowroomReq.name);
            body.append('description', ShowroomReq.description);
            body.append('pin_code', ShowroomReq.pin_code);
            body.append('place', ShowroomReq.place);
            body.append('address', ShowroomReq.address);
            body.append('contact_no', ShowroomReq.contact_no);
            body.append('contact_person', ShowroomReq.contact_person);
            body.append('email', ShowroomReq.email);
            body.append('status', ShowroomReq.status);
            body.append('branch_id', ShowroomReq.branch_type); 
           
            this.http.post(this.apiUrl_user_auths + 'create_showroom_master', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getBookingDetails(selectedDate,selectedDate1){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'vehicle_booking_list?fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getParticularBookingDetails(member_id, selectedDate, selectedDate1){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'particular_vehicle_booking_list?member_id=' + member_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getenquiryDetails(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'enquiry_type')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveBookingRequest(BookingReq){
     return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('member_id', BookingReq.member_id);
            body.append('enquiry_id', BookingReq.enquiry_type);
            body.append('executive_id', BookingReq.employee_type);
            body.append('agent_id', BookingReq.agent_type);
            body.append('pan', BookingReq.pan_card);
            body.append('adhar', BookingReq.adhar_card);
            body.append('licence', BookingReq.licence_no);
            body.append('light_bill', BookingReq.light_bill);
            body.append('bs', BookingReq.bs);
            body.append('rent_agr', BookingReq.rent_aggrement);
            body.append('native_light_bill', BookingReq.native_light_bill);
            body.append('itr', BookingReq.itr);
            body.append('date', BookingReq.selectedDate);
            //body.append('firm_name', BookingReq.firm_name);
        
            body.append('pan_guarantor', BookingReq.guarantor_pan);
            body.append('adhar_guarantor', BookingReq.guarantor_adhar);
            body.append('light_bill_guarantor', BookingReq.guarantor_light_bill);
            body.append('guarantor_unit', BookingReq.unit);
            body.append('rent_agr_guarantor', BookingReq.garantor_rent_aggrement);
            body.append('bs_guarantor', BookingReq.guarantor_BS);
            //body.append('guarantor_ITR', BookingReq.guarantor_ITR);
          
            body.append('pan_guarantor1', BookingReq.guarantor1_pancard);
            body.append('adhar_guarantor1', BookingReq.guarantor1_adharcard);
            body.append('light_bill_guarantor1', BookingReq.guarantor1_lightbill);
            body.append('guarantor1_unit', BookingReq.unit1);
            body.append('rent_agr_guarantor1', BookingReq.guarantor1_rent_aggrement);
            body.append('bs_guarantor1', BookingReq.guarantor1_BS);
           // body.append('guarantor1_ITR', BookingReq.guarantor1_ITR);
            body.append('status', BookingReq.status);  
           
            this.http.post(this.apiUrl_user_auths + 'create_booking', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveAgentRequest(AgentReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('first_name', AgentReq.first_name);
            body.append('middel_name', AgentReq.middel_name);
            body.append('last_name', AgentReq.last_name);
            body.append('mobile_number', AgentReq.mobile_number);
            body.append('status', AgentReq.status); 
           
            this.http.post(this.apiUrl_user_auths + 'create_agent', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAgentList(){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agent_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelschemeRequest(scheme_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_schemes?scheme_id=' + scheme_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelVehicleRequest(vehicle_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_vehicle?vehicle_id=' + vehicle_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelDocumentRequest(document_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_document?document_id=' + document_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelShowroomRequest(showroom_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_showroom?showroom_id=' + showroom_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelFinancerRequest(financer_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_financer?financer_id=' + financer_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelAgentRequest(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_agent?agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
}
