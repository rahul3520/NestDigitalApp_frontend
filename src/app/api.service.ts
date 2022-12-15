import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  EmployeeRegisteration=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeRegistration",dataToSend)
  }

  EmployeeLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeLogin",dataToSend)
  }

  ViewAllEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewEmployees")
  }

  GetEmployeeProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeProfile",dataToSend)
  }

  SecurityGuardLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sgLogin",dataToSend)
  }

  SecurityGuardProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sgProfile",dataToSend)
  }

  EmployeeSearchUsingCode=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  }

  EmployeeDelete=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteEmployee",dataToSend)
  }

  EmployeeUpdate=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/updateEmployee",dataToSend)
  }

  AddEmployeeToLeaveCountDB=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/initializeNewEmployee",dataToSend)
  }

  AddSecurityGuard=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addSecurityGuard",dataToSend)
  }

  ApplyForLeave=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addLeave",dataToSend)
  }

}
