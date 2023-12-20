import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CouponComponent } from '../coupon/coupon.component';
import { ApplyCouponComponent } from '../apply-coupon/apply-coupon.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  allCarOptions:any;
  addCar : FormGroup;
  modelOptions:any = [];
  stateCodeOptions:any = [];
constructor(private service : CarsService,
  private fb : FormBuilder,
  private toastr : ToastrService,
  private dialog : MatDialog
  ){
  this.addCar = this.fb.group({
    brand : '',
    model : '',
    year : '',
    variant : '',
    color : '',
    bodyType : '',
    transmission: '',
    features : '',
    owner : '',
    seats: '',
    kmDriven : '',
    state : '',
    stateCode : '',
    city : '',
    price : ''
  });
}
ngOnInit(){
  this.service.getCarsOptions().subscribe((res:any) =>{
    this.allCarOptions = res.data;
    console.log(res.data)
  }, error => {
    console.log('error', error);
  })
}
onBrandSelect(){
  this.allCarOptions[0].brandList.forEach((element:any) => {
    if(element.brand == this.addCar.controls['brand'].value){
      this.modelOptions = element.models;
    }
  });
}
onStateSelect(){
  this.allCarOptions[0].states.forEach((item:any) => {
    if (item.state == this.addCar.controls['state'].value){
      this.stateCodeOptions = item.codes;
    }
  });
}
add(){
  const data = this.addCar.value;
  // let obj = {
  //   brand: data.brand,
  //   model: data.model,
  //   makeYear: data.year,
  //   variant: data.variable,
  //   kmDriven: data.kmDriven,
  //   features: data.features,
  //   transmission: data.transmission,
  //   bodyType: data.bodyType,
  //   color: data.color,
  //   seats: data.seats,
  //   owner: data.owner,
  //   state: data.state,
  //   stateCode: data.stateCode,
  //   city: data.city,
  //   price: data.price
  // };
  this.service.postCarInfo(data).subscribe((res:any) => {
    console.log(res.message);
    this.toastr.success(res.message);
    this.addCar.reset();
  }, error => {
    console.log('error', error);
    this.toastr.error(error);
  });
}
createCoupon(){
  let dialogRef = this.dialog.open(CouponComponent, {
    height: '500px',
    width: '300px'
  });
  dialogRef.afterClosed().subscribe((res:any) => {
    console.log('Dialog was closed', res);
  });
}
redeemCoupon(){
  let dialogRef = this.dialog.open(ApplyCouponComponent, {
    height: '400px',
    width: '300px'
  });
  dialogRef.afterClosed().subscribe(res => {
    console.log('The redeem dialog was closed', res);
  });
}
logOut(){

}
}
