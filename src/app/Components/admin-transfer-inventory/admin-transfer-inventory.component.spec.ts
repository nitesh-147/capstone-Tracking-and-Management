import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransferInventoryComponent } from './admin-transfer-inventory.component';

describe('AdminTransferInventoryComponent', () => {
  let component: AdminTransferInventoryComponent;
  let fixture: ComponentFixture<AdminTransferInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTransferInventoryComponent]
    });
    fixture = TestBed.createComponent(AdminTransferInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
