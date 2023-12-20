import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
allCars:any;
search:any;
carsDummy:any;
  allWhishlist: any;
  wishlistarray: any;
constructor(private service : CarsService,
  private dialog : MatDialog,
  private toastr : ToastrService){}
ngOnInit(){
  this.getWishlist();
  }

filter(){
  let dialogRef = this.dialog.open(FilterComponent, {
    height : '590px',
    width : '700px'
  });
  dialogRef.afterClosed().subscribe((res:any) => {
    console.log(res);
    this.applyFilter(res);
  });
}
applyFilter(res:any){
    if(res.brand){
      this.allCars = this.allCars.filter((item:any) => {
      return item.brand == res.brand;
      });
    }
    if(res.model){
      this.allCars = this.allCars.filter((item:any) => {
      return item.model == res.model;
      });
    }
    if(res.makeYear){
      this.allCars = this.allCars.filter((item:any) => {
      return item.makeYear == res.makeYear;
      });
    }if(res.variant){
      this.allCars = this.allCars.filter((item:any) => {
      return item.variant == res.variant;
      });
    }if(res.transmission){
      this.allCars = this.allCars.filter((item:any) => {
      return item.transmission == res.transmission;
      });
    }if(res.color){
      this.allCars = this.allCars.filter((item:any) => {
      return item.color == res.color;
      });
    }if(res.owner){
      this.allCars = this.allCars.filter((item:any) => {
      return item.owner == res.owner;
      });
    }if(res.seats){
      this.allCars = this.allCars.filter((item:any) => {
    return item.seats == res.seats;
      });
    }if(res.state){
      this.allCars = this.allCars.filter((item:any) => {
      return item.state == res.state;
      });
    }if(res.features){
      this.allCars = this.allCars.filter((item:any) => {
      let count = 0;
      if(res.features.length >= 0){
        res.features.forEach((feature:any) => {
          if(item.features.indexOf(feature) >= 0){
            count ++;
          }
        });
      }
      if (count == res.feature.length){
        return item;
      }
    });
    }
}
sort(){

}
searchCar(){}
reset(){
  this.service.reset = true;
  this.allCars = this.carsDummy;
}
addToWishlist(item:any){
  if (item.wishListed){
    this.removeFromWishList(item._id);
  }else {
    this.wishlist(item._id);
  }
  this.allCars.forEach((element:any) => {
    if (element._id == item._id){
      item.wishListed = !item.wishListed;
    }
  });
}
wishlist(item:any){
  let body ={
    carId : item
  };
  this.service.addToWishList(body).subscribe((res:any) => {
    this.allWhishlist = res;
    console.log('success', res);
  }, error => {
    console.log('error', error);
  });
}
removeFromWishList(id:any){
  this.service.getAllWishList().subscribe((res:any)=> {
    let wishId:any;
    res.data.forEach((item:any) => {
      if (item.carId == id) {
        wishId = item._id;
      }
    });
    if(wishId) {
      this.service.deleteWishList(wishId).subscribe((res:any)=> {
        this.toastr.success(res.message);
    console.log('success', res);
  }, error => {
    this.toastr.error(error);
    console.log('error', error.message);
  });
    }
  });
 
}
getWishlist(){
  this.service.getAllWishList().subscribe((res:any) => {
    this.wishlistarray = res.data;
    console.log(res);
    let defaultId:any = [];
    if (res.data.length > 0) {
      res.data.forEach((item:any) => {
        defaultId.push(item.carId);
      });
    }
    this.getAllCars(defaultId);
  }, error => {
    console.log('error about getwishlist', error);
  });
}
getAllCars(wishList:any){
  this.service.getCarInfo().subscribe((res:any) => {
    res.data.forEach((item:any) => {
      if (wishList.indexOf(item._id) >= 0){
        item.wishListed = true;
      }
    });
    this.allCars = res.data;
    this.carsDummy = res.data;
  }, error => {
    console.log('error', error)
  });
}
}
