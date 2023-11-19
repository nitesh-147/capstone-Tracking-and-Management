import { Injectable } from '@angular/core';
import { TRACKINGAPP } from '../Constants/constant';
import { ISignup } from '../Models/signupModel';
import { Isignin } from '../Models/signinModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = TRACKINGAPP.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  userLogin(value: Isignin) {
    return this.http.post<any>(this.baseUrl + 'Users/Authenticate', value);
  }

  userSignup(value: ISignup) {
    return this.http.post<any>(this.baseUrl + 'Users/Register', value);
  }
}
