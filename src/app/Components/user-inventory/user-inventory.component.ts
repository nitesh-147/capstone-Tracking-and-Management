import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInventory, IInventoryItem } from 'src/app/Models/inventory';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-user-inventory',
  templateUrl: './user-inventory.component.html',
  styleUrls: ['./user-inventory.component.css']
})
export class UserInventoryComponent implements OnInit {
  name: string | undefined;
  quantity: number | undefined;
  myInventory: IInventory | undefined;
  inventoryItems: IInventoryItem[] = [];
  id: string = localStorage.getItem('userId') || '';
  constructor(
    private route: Router,
    private inventoryService: InventoryServiceService
  ) { }

  ngOnInit(): void {
    this.fetchInventory();
  }

  fetchInventory() {
    this.inventoryService.getInventories().subscribe((res) => {
      console.log(res);
      res.forEach(element => {
        if (element.userId === this.id) {
          this.myInventory = element;
          this.inventoryItems = element.items;
        }
      });
    });
  }

  onAddItem() {
    if (!this.myInventory) {
      const item: IInventoryItem[] = [{
        name: this.name || '',
        quantity: this.quantity || 0
      }];
      const inventory: IInventory = {
        userId: this.id,
        location: "HYD",
        items: item
      }
      this.inventoryService.createInventory(inventory).subscribe();
    } else {
      const item: IInventoryItem[] = this.myInventory.items;
      item.push(
        {
          name: this.name || '',
          quantity: this.quantity || 0
        }
      );
      const updatedInventory: IInventory = {
        ...this.myInventory,
        items: item
      }
      this.inventoryService.updateInventory(this.myInventory.id || '', updatedInventory).subscribe();
    }
    setTimeout(() => this.fetchInventory(), 100);
    this.name = undefined;
    this.quantity = undefined;
  }

  onDelete(name: string, quantity: number) {
    const updatedItem = this.inventoryItems.filter(e => e.name !== name && e.quantity !== quantity);
    let updatedInventory: IInventory = {
      items: [],
      userId: this.id,
      location: ''
    };
    if (this.myInventory) {
      updatedInventory = {
        ...this.myInventory,
        items: updatedItem
      }
    }
    this.inventoryService.updateInventory(this.myInventory?.id || '', updatedInventory).subscribe();
    setTimeout(() => this.fetchInventory(), 100);
  }

}
