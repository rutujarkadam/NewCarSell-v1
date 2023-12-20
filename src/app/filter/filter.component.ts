import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
carsData:any;
filterCriteria: FormGroup
constructor(private service : CarsService,
  private fb : FormBuilder){
    this.filterCriteria = this.fb.group({
      brand : '',
      model : '',
      makeYear : '',
      variant : '',
      transmission : '',
      features : '',
      bodyType : '',
      color : '',
      owner : '',
      seats : '',
      state : '',
      kmDriven : ''
    });
  }
noOnInit(){
  this.service.getCarInfo().subscribe((res:any) => {
    this.carsData = res.data;
    console.log(res);
  }, error => {
    console.log('error', error);
  })
}

}
