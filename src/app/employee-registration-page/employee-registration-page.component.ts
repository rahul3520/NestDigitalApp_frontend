import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration-page',
  templateUrl: './employee-registration-page.component.html',
  styleUrls: ['./employee-registration-page.component.css']
})
export class EmployeeRegistrationPageComponent {

  empCode=""
  name=""
  designation=""
  salary=""
  phoneNo=""
  emailId=""
  password=""

  constructor(private api:ApiService){}

  EmployeeRegister=()=>
  {
    let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"salary":this.salary,"phoneNo":this.phoneNo,"emailId":this.emailId,"password":this.password} 

    console.log(data)

    this.api.EmployeeRegisteration(data).subscribe(

      (response:any)=>
      {
        if ((response.status=="success")) {

          alert("employee registered successfully!")
          localStorage.setItem("empId",response.empID)
          this.empCode=""
          this.name=""
          this.designation=""
          this.salary=""
          this.phoneNo=""
          this.emailId=""
          this.password=""
          
        } else {

          alert("Failed to register employee. Try again")
          this.empCode=""
          this.name=""
          this.designation=""
          this.salary=""
          this.phoneNo=""
          this.emailId=""
          this.password=""
          
        }
      }
    )

  }
}
