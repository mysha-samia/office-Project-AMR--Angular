import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() {
  }

  public static SERVICES = [
    {name: 'All', value: '1'},
    {name: 'Diagnostic Referral', value: 'DIAGNOSTIC'},
    {name: 'Hospital Referral', value: 'HOSPITAL'},
    {name: 'New User Registration', value: 'NEW_USERS'},
    {name: 'No. of Prescriptions with Product', value: 'PRESCRIPTIONS_WITH_PRODUCT'},
    {name: 'No. of Product Prescribed', value: 'PRODUCT_PRESCRIBED'},
    {name: 'Screening', value: 'SCREENING'},
    {name: 'Served', value: 'SERVED'},
    {name: 'Specialists Referral', value: 'SPECIALISTS'},
    {name: 'Telemedicine', value: 'TELEMEDICINE'},

  ]

  public static SERVICES_FOR_AMR = [
    {name: 'All', value: '1'},
    {name: 'User With Prescription', value: 'USER_WITH_PRESCRIPTION'},
    {name: 'User With Symptoms', value: 'USER_WITH_SYMPTOMS'},
    {name: 'User With Medicine Name', value: 'USER_WITH_MEDICINE_NAME'},
    {name: 'Total New Registration User', value: 'TOTAL_NEW_REGISTRATION_USER'},
    {name: 'User Refuse to Take Telemedicine but Buy Medicine', value: 'USER_REFUSE_TO_TAKE_TELEMEDICINE_BUT_BUY_MEDICINE'},
    {name: 'User Taken Telemedicine Service', value: 'USER_TAKEN_TELEMEDICINE'},
  ]

}
