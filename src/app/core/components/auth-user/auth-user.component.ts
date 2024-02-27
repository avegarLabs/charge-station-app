import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthCredentials, JwtToken } from '../../interfaces/authCredentials';
import { RegisterModel, UserListItem } from '../../interfaces/userInterface';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css'],
})
export class AuthUserComponent implements OnInit {
  title: string = 'Welcome to CSM app';
  logOp: boolean = true;
  regOp: boolean = false;
  accessCredential!: AuthCredentials;
  userModel!: RegisterModel;
  authForm!: FormGroup;
  user!: UserListItem;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private tokenService: TokenService,
    private route: Router
  ) {}

  ngOnInit() {
    this.authForm = this.initLogForm();
  }

  initLogForm(): FormGroup<any> {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  initRegisterForm(): FormGroup<any> {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  enableRegisterForm() {
    this.logOp = false;
    this.regOp = true;
    this.authForm = this.initRegisterForm();
  }

  authenticateUser() {
    this.accessCredential = {
      username: this.authForm.value.username,
      password: this.authForm.value.password,
    };
    return  this.service.login(this.accessCredential).subscribe((data:JwtToken) => {
      if (data) {
        this.tokenService.setToken(data.token);
        this.route.navigate(['']);
      }
    });
  }

  registerUser() {
    if (this.authForm.value.password === this.authForm.value.password2) {
      this.userModel = {
        name: this.authForm.value.name,
        username: this.authForm.value.username,
        email: this.authForm.value.email,
        password: this.authForm.value.password,
        roleList: ['ROLE_USER'],
      };
      this.service.newUser(this.userModel).subscribe((data: UserListItem) => {
        if (data) {
          this.user = data;
          this.route.navigate(['auth-confirm']);
        }
      });
    }
  }
}
