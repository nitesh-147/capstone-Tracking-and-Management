import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser={
    name:'',
    email:'',
    id:'',
    role:'',
    userName:''
  };
  userId:string='';
  constructor(
    private userService: UserServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    var tempString = localStorage.getItem('userId');
    if (tempString) this.userId = tempString;
    this.fetchUser(this.userId);
  }

  private fetchUser(id: string) {
    this.userService.fetchUser(id).subscribe(res => {
      this.user = res;
    })
  }

  onLogout(){
    localStorage.setItem('userId','');
    this.route.navigate(['/']);
  }
}
