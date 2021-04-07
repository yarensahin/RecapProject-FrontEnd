import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:Car[];
  carDetailsLoad=false;
  rentalControl = false;
  rentalMessage="";

  constructor(private carDetailService: CardetailService,
              private rentalService: RentalService,
              private activatedRouted: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarsById(params["carId"])
      }
    })   
  }

  getCarsById(carId:number) {
    this.carDetailService.getCarByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;   
      this.carDetailsLoad=response.success;   
    });
  }

}
