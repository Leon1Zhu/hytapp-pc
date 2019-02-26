import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import aes from '../util/aes';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  private addSubPcApi = '/api/addSubscribePc';
  private addSubApi = '/api/addSubscribe';
  constructor(private http: HttpClient) { }

  /**
   * 新增订阅
   * 关于我们页面使用，没有楼盘信息
   */
  public addNewSubPc(phone, type) {

    const params = {
      phone: aes.encryption(phone),
      type,
      origin: 'PC',
    }
    return this.http.post(this.addSubPcApi, null, {params});
  }

  /**
   * 新增订阅
   * 关于我们页面使用，没有楼盘信息
   */
  public addNewSub(phone, name, proId, type) {

    const params = {
      phone: aes.encryption(phone),
      name,
      proId,
      type,
      origin: 'PC',
    }
    return this.http.post(this.addSubApi, null, {params});
  }

}
