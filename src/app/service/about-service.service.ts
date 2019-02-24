import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
      phone,
      type,
      origin: 'PC',
    }
    return this.http.post(this.addSubPcApi, null, {params});
  }

}
