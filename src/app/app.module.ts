import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';
import { MatStepperModule} from '@angular/material/stepper';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CouponComponent } from './coupon/coupon.component';
import { FilterComponent } from './filter/filter.component';
import { MatIconModule } from '@angular/material/icon';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    CouponComponent,
    FilterComponent,
    ApplyCouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
