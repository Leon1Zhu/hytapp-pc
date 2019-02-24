import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseManageServiceService {

  private getHouseByIdApi = '/api/getHouseById';
  constructor(private http: HttpClient) { }

  public getHouseById(houseId: string) {
    const params = {
      houseid: houseId,
    }
    return this.http.get(this.getHouseByIdApi, {params});
  }
}
