import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CouponComponent } from './coupon/coupon.component';

const routes: Routes = [
  {
    path : 'admin', component : AdminComponent
  },
  {
    path : '', component : LoginComponent
  },
  {
    path : 'dashboard', component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
