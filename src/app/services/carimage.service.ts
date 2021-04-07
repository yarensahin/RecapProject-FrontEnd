import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl = 'https://localhost:44347/api/';
  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
