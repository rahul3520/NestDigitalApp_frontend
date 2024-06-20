import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent {

  emailId=""
  password=""

  constructor(private api:ApiService,private route:Router){}


  employeeLoginCheck=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}

    console.log(data)

    this.api.EmployeeLogin(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          localStorage.setItem("empInfo",response.id)

          alert("valid login")

          this.route.navigate(["/employeeProfile"])
        }
        else
        {
          alert("Invalid Login!")

          this.emailId=""
          this.password=""  
        }
      }
    )


  }

}
