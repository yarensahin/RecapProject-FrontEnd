import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = 'https://localhost:44347/api/';
  constructor(private httpClient:HttpClient) { }

  getCarByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
