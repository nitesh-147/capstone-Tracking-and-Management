import { Component, OnInit } from '@angular/core';
import { IInventory } from 'src/app/Models/inventory';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-admin-inventories',
  templateUrl: './admin-inventories.component.html',
  styleUrls: ['./admin-inventories.component.css']
})
export class AdminInventoriesComponent implements OnInit {
  inventoriesList: IInventory[] = [];
  constructor(
    private inventoryService: InventoryServiceService
  ) { }

  ngOnInit(): void {
    this.fetchInventory();
  }

  fetchInventory() {
    this.inventoryService.getInventories().subscribe((res) => {
      this.inventoriesList = res;
    });
  }
}
