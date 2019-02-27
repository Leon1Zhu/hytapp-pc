import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseManageServiceService {

  private getHouseByIdApi = '/api/getHouseById';
  private getlikeHouseApi = '/api/getLikeHouse';
  constructor(private http: HttpClient) { }

  public getHouseById(houseId: string) {
    const params = {
      houseid: houseId,
    }
    return this.http.get(this.getHouseByIdApi, {params});
  }

  public getlikeHouse(page, size) {
    const params = {
      page,
      size
    }
    return this.http.get(this.getlikeHouseApi, {params});
  }
}
