import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VariableConstants } from './variable.constants';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http : HttpClient) { }
  getCarsOptions(){
    const url = VariableConstants.optionsUrl;
    return this.http.get(url);
  }
  postCarInfo(body:any){
    const url = VariableConstants.postCarUrl;
    return this.http.post(url, body);
  }
  login(body:any){
    const url = VariableConstants.login;
    return this.http.post(url, body);
  }
  getCarInfo(){
    const url = VariableConstants.getCar;
    return this.http.get(url);
  }
  createCoupon(body:any){
    const url = VariableConstants.createCoupon;
    return this.http.post(url, body);
  }
  getAllcoupons(){
    const url = VariableConstants.getCoupons;
    return this.http.get(url);
  }
  deleteCoupon(id:any){
    const url = VariableConstants.deletecoupon + id.toString();
    return this.http.delete(url);
  }
  redeemCoupon(code:any){
    const url = VariableConstants.redeemCoupon;
    return this.http.post(url, code);
  }
}
