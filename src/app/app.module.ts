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
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeGrantLeavesComponent } from './employee-grant-leaves/employee-grant-leaves.component';
import { AddSecurityGuardComponent } from './add-security-guard/add-security-guard.component';
import { ApplyForLeaveComponent } from './apply-for-leave/apply-for-leave.component';
import { ViewMyLeavesComponent } from './view-my-leaves/view-my-leaves.component';
import { EmployeeLeaveHandleComponent } from './employee-leave-handle/employee-leave-handle.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { VisitorEntryComponent } from './visitor-entry/visitor-entry.component';
import { ViewAllEmployeeLogsComponent } from './view-all-employee-logs/view-all-employee-logs.component';
import { ViewAllVisitorLogsComponent } from './view-all-visitor-logs/view-all-visitor-logs.component';


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
  },
  {
    path:"searchEmployee",
    component:EmployeeSearchComponent
  },
  {
    path:"deleteEmployee",
    component:EmployeeDeleteComponent
  },
  {
    path:"updateEmployee",
    component:EmployeeUpdateComponent
  },
  {
    path:"grantLeaveForEmployee",
    component:EmployeeGrantLeavesComponent
  },
  {
    path:"addSecurityGuard",
    component:AddSecurityGuardComponent
  },
  {
    path:"applyForLeave",
    component:ApplyForLeaveComponent
  },
  {
    path:"viewMyLeaves",
    component:ViewMyLeavesComponent
  },
  {
    path:"employeeLeaveHandle",
    component:EmployeeLeaveHandleComponent
  },
  {
    path:"employeeEntryLog",
    component:EmployeeEntryComponent
  },
  {
    path:"visitorEntryLog",
    component:VisitorEntryComponent
  },
  {
    path:"viewAllEmployeeLogsandUpdateExitTime",
    component:ViewAllEmployeeLogsComponent
  },
  {
    path:"viewAllVisitorLogsandUpdateExitTime",
    component:ViewAllVisitorLogsComponent
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
    SecurityGuardLoginbarComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    EmployeeUpdateComponent,
    EmployeeGrantLeavesComponent,
    AddSecurityGuardComponent,
    ApplyForLeaveComponent,
    ViewMyLeavesComponent,
    EmployeeLeaveHandleComponent,
    EmployeeEntryComponent,
    VisitorEntryComponent,
    ViewAllEmployeeLogsComponent,
    ViewAllVisitorLogsComponent
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
