import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security-guard',
  templateUrl: './add-security-guard.component.html',
  styleUrls: ['./add-security-guard.component.css']
})
export class AddSecurityGuardComponent {

  empCode=""
  name=""
  // designation=""
  salary=""
  phoneNo=""
  emailId=""
  password=""

  constructor(private api:ApiService){}

  EmployeeRegister=()=>
  {
    let data:any={"empCode":this.empCode,"name":this.name,"salary":this.salary,"phoneNo":this.phoneNo,"emailId":this.emailId,"password":this.password} 

    console.log(data)

    this.api.AddSecurityGuard(data).subscribe(

      (response:any)=>
      {
        if ((response.status=="success")) {

          alert("Security Guard registered successfully!")
          localStorage.setItem("sgInfo",response.sgID)
          this.empCode=""
          this.name=""
          // this.designation=""
          this.salary=""
          this.phoneNo=""
          this.emailId=""
          this.password=""
          
        } else {

          alert("Failed to register Security Guard. Try again")
          this.empCode=""
          this.name=""
          // this.designation=""
          this.salary=""
          this.phoneNo=""
          this.emailId=""
          this.password=""
          
        }
      }
    )

  }

}
