import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRACKINGAPP } from '../Constants/constant';
import { INotification } from '../Models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  private baseUrl = TRACKINGAPP.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  postNotification(value: INotification) {
    return this.http.post<any>(this.baseUrl + 'Notifications', value);
  }

  getNotification() {
    return this.http.get<INotification[]>(this.baseUrl + 'Notifications');
  }

  updateNotification(id: string, value: INotification) {
    return this.http.put<any>(this.baseUrl + 'Notifications/' + id, value);
  }
}
