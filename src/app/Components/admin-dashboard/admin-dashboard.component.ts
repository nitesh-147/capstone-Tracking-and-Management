import { Component, OnInit } from '@angular/core';
import { ISignup } from 'src/app/Models/signupModel';
import { IUser } from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  userId!: string;
  user!: IUser;
  userName!:string;
  constructor(
    private userService: UserServiceService
  ) { }
  ngOnInit(): void {
    var tempString = localStorage.getItem('userId');
    if (tempString) this.userId = tempString;
    this.fetchUser(this.userId);
  }

  private fetchUser(id: string) {
    this.userService.fetchUser(id).subscribe(res => {
      this.user = res;
      this.userName=res.userName;
    })
  }
}
