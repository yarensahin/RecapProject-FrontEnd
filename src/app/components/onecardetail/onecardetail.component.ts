import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-onecardetail',
  templateUrl: './onecardetail.component.html',
  styleUrls: ['./onecardetail.component.css']
})
export class OnecardetailComponent implements OnInit {

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute
    ) { }

  cars:Car[]=[]
  dataLoaded=false;
  apiUrl = 'https://localhost:44347/api/';


  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    if(params["carId"]){
        this.getCarByCarId(params["carId"])
      }
      else{
        this.getCarDetails()
      }
    })
  }

  getCarDetails(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    }

    getCarByCarId(carId:number){
      this.carService.getCarByCarId(carId).subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true;
      })
    }
}
