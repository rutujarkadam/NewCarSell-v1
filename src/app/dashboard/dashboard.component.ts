import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
allCars:any;
search:any;
carsDummy:any;
constructor(private service : CarsService,
  private dialog : MatDialog){}
ngOnInit(){
  this.service.getCarInfo().subscribe((res:any) => {
    this.allCars = res.data;
    this.carsDummy = this.allCars;
    console.log(res);
  }, error => {
    console.log('error', error);
  });
}
filter(){
  let dialogRef = this.dialog.open(FilterComponent, {
    height : '700px',
    width : '600px'
  });
  dialogRef.afterClosed().subscribe((res:any) => {
    console.log(res);
  });
}
sort(){

}
searchCar(){}
}
