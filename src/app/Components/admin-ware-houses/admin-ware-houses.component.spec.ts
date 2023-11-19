import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWareHousesComponent } from './admin-ware-houses.component';

describe('AdminWareHousesComponent', () => {
  let component: AdminWareHousesComponent;
  let fixture: ComponentFixture<AdminWareHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWareHousesComponent]
    });
    fixture = TestBed.createComponent(AdminWareHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
