import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRACKINGAPP } from '../Constants/constant';
import { IInventory } from '../Models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {
  baseUrl = TRACKINGAPP.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getInventories() {
    return this.http.get<IInventory[]>(this.baseUrl + 'Inventories');
  }

  createInventory(value: IInventory) {
    return this.http.post<any>(this.baseUrl + 'Inventories', value);
  }

  updateInventory(id: string, value: IInventory) {
    return this.http.put<any>(this.baseUrl + 'Inventories/' + id, value);
  }
}
