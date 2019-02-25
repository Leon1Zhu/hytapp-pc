import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import aes from '../util/aes';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  private addSubPcApi = '/api/addSubscribePc';
  constructor(private http: HttpClient) { }

  /**
   * 新增订阅
   */
  public addNewSubPc(phone, type) {

    const params = {
      phone: aes.encryption(phone),
      type,
      origin: 'PC',
    }
    return this.http.post(this.addSubPcApi, null, {params});
  }

}
