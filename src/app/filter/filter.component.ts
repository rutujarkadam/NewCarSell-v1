import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
carsData:any;
filterCriteria: FormGroup
  modelOptions: any;
  stateCodeOptions: any;
constructor(private service : CarsService,
  private fb : FormBuilder,
  private dialogRef : MatDialogRef<FilterComponent>){
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
ngOnInit(){
  this.service.getCarsOptions().subscribe((res:any) => {
    this.carsData = res.data;
    console.log('Cars Data', res);
  }, error => {
    console.log('error', error);
  });
  if(this.service.reset== true ){
    this.filterCriteria.reset();
  }else if(this.service.appliedFilters){
    this.filterCriteria.patchValue(this.service.appliedFilters);
    console.log('filter', this.filterCriteria.value)
  }
  
}
onBrandSelect(){
  this.carsData[0].brandList.forEach((element:any) => {
    if(element.brand == this.filterCriteria.controls['brand'].value){
      this.modelOptions = element.models;
    }
  });
}

apply(){
  this.service.appliedFilters = this.filterCriteria.value;
  this.service.reset = false;
  this.dialogRef.close(this.service.appliedFilters);

}
}
