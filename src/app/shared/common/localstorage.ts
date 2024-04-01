import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Localstorage {

  constructor() {
  }

  public static KEYS: any = {
    id: '*Aijbsdjibvjii&&^%&^%&*&&*',
    clientId: '*&^%&%frgter^87i5',
    clientSecret: 'V%$#reg%786v*7i6',
    accessToken: 'B57UB5&ehyr&5b&*6',
    refreshToken: 'INB*gege&U4^345%36^5u',
    authorities: 'BUegeg&v3$76u%^&*',
    parent_id: '*JBCISJBI&^T*&WQ&*',
    user_id: 'IUGYGWII&*(&*((@E7|7',
    users_name: 'UIJBUIDIUBBCNMIIWe3453t1',
    name: 'Foaefhjbvjb78777%$%$%%^$##',
    users_phone_number: 'Bdfd983789723855^4^3&tertre',
    agent_type_code: 'asfwee89123y3&tertre',
    manufacturer_name: 'aksjdASDFS@@E#@#A#$W#Q%$',
    image: 'aksjdAaka#######@#A#$W#Q%$',
  };

  static put(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static retrive(key: string) {
    return localStorage.getItem(key);
  }

  static putAuth(data: any) {
    localStorage.setItem(this.KEYS.id, data.id);
    localStorage.setItem(this.KEYS.manufacturer_name, data?.manufacturer_name);
    localStorage.setItem(this.KEYS.image, data?.image);
    localStorage.setItem(this.KEYS.name, data?.name);
    localStorage.setItem(this.KEYS.parent_id, data.parent_id);
    localStorage.setItem(this.KEYS.user_id, data.user_id);
    localStorage.setItem(this.KEYS.users_name, data.users_name);
    localStorage.setItem(this.KEYS.users_phone_number, data.users_phone_number);
    localStorage.setItem(this.KEYS.agent_type_code, data.agent_type_code);
  }

  static clear(): void {
    localStorage.clear();
  }
}

