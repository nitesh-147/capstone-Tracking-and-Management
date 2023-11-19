import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingDeliveriesComponent } from './admin-pending-deliveries.component';

describe('AdminPendingDeliveriesComponent', () => {
  let component: AdminPendingDeliveriesComponent;
  let fixture: ComponentFixture<AdminPendingDeliveriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPendingDeliveriesComponent]
    });
    fixture = TestBed.createComponent(AdminPendingDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
