import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  newCoupon : FormGroup;
  allCoupons:any;
  coupons = false;
  displayedColumns = ['Coupon Code', 'Coupon Discount', 'Delete'];
  constructor(private fb: FormBuilder,
    private toastr : ToastrService,
    private service: CarsService){
    this.newCoupon = this.fb.group({
      couponCode : '',
      discount : ''
    });
  }
  createCoupon(){
    const obj = this.newCoupon.value;
    this.service.createCoupon(obj).subscribe((res:any) => {
      console.log(res);
      this.toastr.success(res.message);
      this.newCoupon.reset();
    }, error => {
      console.log('error', error);
    });
  }
  showAllCoupons(){
    this.service.getAllcoupons().subscribe((res:any) => {
      this.allCoupons = res.data;
      console.log(res);
      this.coupons = true;
    }, error => {
      console.log('error', error);
    });
  }
  delete(id:any){
    this.service.deleteCoupon(id).subscribe((res:any) => {
      console.log(res);
      this.toastr.success(res.message);
      this.showAllCoupons();
    }, error => {
      console.log('error', error);
    });
  }
  back(){
    this.coupons = false;
  }
}
