import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OtpPageComponent } from './otp-page/otp-page.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    OtpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    SignupComponent,
    LoginComponent,
    OtpPageComponent
  ]
})
export class AuthModule { }
