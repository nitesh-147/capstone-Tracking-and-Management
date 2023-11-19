import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRACKINGAPP } from '../Constants/constant';
import { IOrder } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  baseUrl: string = TRACKINGAPP.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  postOrder(value: IOrder) {
    return this.http.post<any>(this.baseUrl + 'Orders', value);
  }

  getOrder() {
    return this.http.get<any>(this.baseUrl + 'Orders');
  }

  updateOrder(id:string,value:IOrder){
    return this.http.put<any>(this.baseUrl + 'Orders/'+id,value);
  }

  deleteOrder(id:string){
    return this.http.delete<any>(this.baseUrl + 'Orders/'+id);
  }
}
