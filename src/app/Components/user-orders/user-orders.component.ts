import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Models/order';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  orders: IOrder[] = [];
  constructor(
    private orderService: OrderServiceService
  ) { }
  ngOnInit(): void {
    this.fetchOrder();
  }
  private fetchOrder() {
    this.orderService.getOrder().subscribe(res => {
      const id = localStorage.getItem('userId');
      this.orders = res;
      this.orders = this.orders.filter(item => item.userId == id);
      this.orders=this.orders.reverse();
    });
  }

  onDelete(id: string) {
    this.orderService.deleteOrder(id).subscribe();
    setTimeout(() => this.fetchOrder(), 100);
  }
}
