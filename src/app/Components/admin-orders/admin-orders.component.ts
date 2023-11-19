import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Models/order';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  ordersList: IOrder[] = [];
  constructor(
    private orderService: OrderServiceService
  ) { }

  ngOnInit(): void {
    this.fetchOrder();
  }

  private fetchOrder(): void {
    this.orderService.getOrder().subscribe((res) => {
      this.ordersList = res;
      this.ordersList=this.ordersList.reverse();
    });
  }
}
