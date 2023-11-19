import { Component, OnInit } from '@angular/core';
import { INotification } from 'src/app/Models/notification';
import { NotificationServiceService } from 'src/app/Services/notification-service.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {
  notificationsList: INotification[] = [];
  id: string = '';

  constructor(
    private notificationService: NotificationServiceService
  ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('userId') || '';
    this.fetchNotification(this.id);
  }

  private fetchNotification(id: string) {
    this.notificationsList=[];
    this.notificationService.getNotification().subscribe(res => {
      res.forEach(item => {
        if (item.userId === id) {
          this.notificationsList.push(item);
        }
      });
      this.notificationsList=this.notificationsList.reverse();
    });
  }

  unreadNotification(notification: INotification): void {
    const updatedNotification: INotification = {
      ...notification,
      status: "seen"
    };
    this.notificationService.updateNotification(notification.id || '', updatedNotification).subscribe();
    setTimeout(() => this.fetchNotification(this.id), 100);
  }
}
