import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/Models/order';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderForm!: FormGroup;
  constructor(
    private orderService: OrderServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      'productName': ['', Validators.required],
      'quantity': ['', Validators.required],
      'recipentName': ['', Validators.required],
      'address': ['', Validators.required],
    });
  }
  onOrder() {
    const currentOrder: IOrder = {
      ...this.orderForm.value,
      userId: localStorage.getItem('userId'),
      orderDate: new Date().toLocaleString(),
      orderStatus: 'Placed'
    }
    this.orderService.postOrder(currentOrder).subscribe(res => {
      this.orderForm.reset();
    })
  }
}
