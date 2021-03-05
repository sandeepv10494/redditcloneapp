import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayload } from './login-request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginRequestPayload ={
      username:'',
      password:''
    };
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.activatedRoute.queryParams.subscribe(param => {
      if(param.registered !== undefined && param.registered === 'true' ){
        this.toastr.success('Signup Successful');
        this.registerSuccessMessage = 'Please Check you inbox for activation email and activate you account before login';
      }
    })
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      if(data){
        this.isError = false;
        this.router.navigateByUrl('/');
        this.toastr.success('Login Successfull');
      }
      else{
        this.isError = true;
      }
    });
  }
}
