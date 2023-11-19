import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRACKINGAPP } from '../Constants/constant';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = TRACKINGAPP.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  fetchUser(id: string) {
    return this.http.get<any>(this.baseUrl +'Users/id?id='+ id);
  }
}
