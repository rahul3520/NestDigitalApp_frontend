import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegistrationPageComponent } from './employee-registration-page/employee-registration-page.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { LogoutBarComponent } from './logout-bar/logout-bar.component';
import { AdminLoggedInPageComponent } from './admin-logged-in-page/admin-logged-in-page.component';
import { ViewAllEmployeesComponent } from './view-all-employees/view-all-employees.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { SecurityGuardLoginPageComponent } from './security-guard-login-page/security-guard-login-page.component';
import { SecurityGuardProfileComponent } from './security-guard-profile/security-guard-profile.component';
import { EmployeeLoginbarComponent } from './employee-loginbar/employee-loginbar.component';
import { SecurityGuardLoginbarComponent } from './security-guard-loginbar/security-guard-loginbar.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginPageComponent
  },
  {
    path:"employeeLogin",
    component:EmployeeLoginPageComponent
  },
  {
    path:"employeeRegistration",
    component:EmployeeRegistrationPageComponent
  },
  {
    path:"adminProfile",
    component:AdminLoggedInPageComponent
  },
  {
    path:"employeeProfile",
    component:EmployeeProfileComponent
  },
  {
    path:"viewAllEmployees",
    component:ViewAllEmployeesComponent
  },
  {
    path:"securityGuardLogin",
    component:SecurityGuardLoginPageComponent
  },
  {
    path:"securityGuardProfile",
    component:SecurityGuardProfileComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationPageComponent,
    AdminLoginPageComponent,
    EmployeeLoginPageComponent,
    LogoutBarComponent,
    AdminLoggedInPageComponent,
    ViewAllEmployeesComponent,
    EmployeeProfileComponent,
    SecurityGuardLoginPageComponent,
    SecurityGuardProfileComponent,
    EmployeeLoginbarComponent,
    SecurityGuardLoginbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
