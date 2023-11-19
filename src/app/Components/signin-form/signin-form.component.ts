import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onLogin(): void {
    this.authService.userLogin(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('userId',res.userid);
        if(res.token=='User'){
          this.route.navigate(['user-dashboard/'+res.user]);
        }else{
          this.route.navigate(['admin-dashboard/'+res.user]);
        }
      },
      err=>{
        alert(err.error.message);
      }
    )
  }
}
