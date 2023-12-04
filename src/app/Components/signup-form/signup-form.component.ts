import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/Helper/must-match.validation';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route:Router,
    private authService:AuthenticationService,
    private toastr:ToastrService
  ) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'confirmPassword': ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  onSubmit(): void {
    this.authService.userSignup(this.signupForm.value).subscribe((res)=>{
     this.toastr.success("SignUp Successful");
     this.signupForm.reset();
     this.route.navigate(['login']);
    },
    (err)=>{
      this.toastr.warning(err.error.message);
    }
    );
  }
}
