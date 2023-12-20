import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.scss']
})
export class ApplyCouponComponent {
  applyCoupon:FormGroup;
  constructor(private fb :  FormBuilder,
    private service:CarsService,
    private toastr : ToastrService){
    this.applyCoupon = this.fb.group({
      couponCode : '',
      discount : ''
    });
  }
  apply(){
    const code = {
      couponCode : this.applyCoupon.controls['couponCode'].value
    };
    this.service.redeemCoupon(code).subscribe((res:any) => {
      console.log(res);
      this.toastr.info(res.data.message);
      this.applyCoupon.get('discount')?.patchValue(res.data.discount);
    }, error => {
      console.log('error', error);
    });
  }
}
