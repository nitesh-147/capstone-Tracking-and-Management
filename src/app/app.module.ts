import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { SigninFormComponent } from './Components/signin-form/signin-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material-module';
import { CreateOrderComponent } from './Components/create-order/create-order.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UserOrdersComponent } from './Components/user-orders/user-orders.component';
import { UserInventoryComponent } from './Components/user-inventory/user-inventory.component';
import { UserNotificationComponent } from './Components/user-notification/user-notification.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminInventoriesComponent } from './Components/admin-inventories/admin-inventories.component';
import { AdminPendingDeliveriesComponent } from './Components/admin-pending-deliveries/admin-pending-deliveries.component';
import { AdminTransferInventoryComponent } from './Components/admin-transfer-inventory/admin-transfer-inventory.component';
import { AdminWareHousesComponent } from './Components/admin-ware-houses/admin-ware-houses.component';
import { UserNavigationComponent } from './Components/user-navigation/user-navigation.component';
import { AdminNavigationComponent } from './Components/admin-navigation/admin-navigation.component';
import { ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SigninFormComponent,
    HomepageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CreateOrderComponent,
    ProfileComponent,
    UserOrdersComponent,
    UserInventoryComponent,
    UserNotificationComponent,
    AdminOrdersComponent,
    AdminInventoriesComponent,
    AdminPendingDeliveriesComponent,
    AdminTransferInventoryComponent,
    AdminWareHousesComponent,
    UserNavigationComponent,
    AdminNavigationComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
