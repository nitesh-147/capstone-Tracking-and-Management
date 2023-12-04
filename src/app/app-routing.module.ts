import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './Components/signin-form/signin-form.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CreateOrderComponent } from './Components/create-order/create-order.component';
import { UserOrdersComponent } from './Components/user-orders/user-orders.component';
import { UserInventoryComponent } from './Components/user-inventory/user-inventory.component';
import { UserNotificationComponent } from './Components/user-notification/user-notification.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminInventoriesComponent } from './Components/admin-inventories/admin-inventories.component';
import { AdminTransferInventoryComponent } from './Components/admin-transfer-inventory/admin-transfer-inventory.component';
import { AdminPendingDeliveriesComponent } from './Components/admin-pending-deliveries/admin-pending-deliveries.component';
import { AdminWareHousesComponent } from './Components/admin-ware-houses/admin-ware-houses.component';
import { AdminNavigationComponent } from './Components/admin-navigation/admin-navigation.component';
import { UserNavigationComponent } from './Components/user-navigation/user-navigation.component';
import { hasRoleGuard } from './Guards/user-role.guard';
import { matchRoleGuard } from './Guards/admin-role.guard';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: SigninFormComponent },
  { path: 'signup', component: SignupFormComponent },
  {
    path: 'user-dashboard/:username',
    component: UserDashboardComponent,
    canActivate: [hasRoleGuard],
    children: [
      { path: '', component: UserNavigationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'orders', component: UserOrdersComponent },
      { path: 'inventory', component: UserInventoryComponent },
      { path: 'notification', component: UserNotificationComponent }
    ]
  },
  {
    path: 'admin-dashboard/:username',
    component: AdminDashboardComponent,
    canActivate: [matchRoleGuard],
    children: [
      { path: '', component: AdminNavigationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'Orders', component: AdminOrdersComponent },
      { path: 'Inventories', component: AdminInventoriesComponent },
      { path: 'TransferRequest', component: AdminTransferInventoryComponent },
      { path: 'Deliveries', component: AdminPendingDeliveriesComponent },
      { path: 'Warehouses', component: AdminWareHousesComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
