import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm: FormGroup;
constructor(private fb: FormBuilder,
  private service : CarsService,
  private toastr : ToastrService,
  private router : Router){
  this.loginForm = this.fb.group({
    username : ['',Validators.required],
    password : ['', Validators.required]
  });
}
login(){
  const body = this.loginForm.value;
  this.service.login(body).subscribe((res:any) => {
    console.log(res.data);
    this.toastr.info(res.data);
    this.router.navigateByUrl('dashboard');
  }, error => {
    console.log('error', error);
    this.toastr.error(error);
  });
}
}
