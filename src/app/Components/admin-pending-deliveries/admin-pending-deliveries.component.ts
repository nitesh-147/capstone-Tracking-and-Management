import { Component } from '@angular/core';
import { TRACKINGAPP } from 'src/app/Constants/constant';
import { INotification } from 'src/app/Models/notification';
import { IOrder } from 'src/app/Models/order';
import { NotificationServiceService } from 'src/app/Services/notification-service.service';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-admin-pending-deliveries',
  templateUrl: './admin-pending-deliveries.component.html',
  styleUrls: ['./admin-pending-deliveries.component.css']
})
export class AdminPendingDeliveriesComponent {
  ordersList: IOrder[] = [];
  orderCycle = TRACKINGAPP.orderStatus;
  constructor(
    private orderService: OrderServiceService,
    private notificationService: NotificationServiceService
  ) { }

  ngOnInit(): void {
    this.fetchOrder();
  }

  private fetchOrder(): void {
    this.orderService.getOrder().subscribe((res) => {
      this.ordersList = res;
    });
  }

  onUpdate(order: IOrder): void {
    let index: number = this.orderCycle.findIndex(item => item === order.orderStatus) || 0;
    // console.log(index);
    let newStatus = this.orderCycle[index + 1];
    let notification: INotification = {
      message: `Your Order ${order.productName} status has been updated: ${newStatus}`,
      createdAt: new Date().toLocaleString(),
      userId: order.userId,
      status: 'unseen'
    };
    this.notificationService.postNotification(notification).subscribe();
    let updatedOrder: IOrder = { ...order, orderStatus: newStatus };
    this.orderService.updateOrder(order.id || '', updatedOrder).subscribe();
    setTimeout(() => this.fetchOrder(), 1000);
  }
}
