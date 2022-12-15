import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-guard-login-page',
  templateUrl: './security-guard-login-page.component.html',
  styleUrls: ['./security-guard-login-page.component.css']
})
export class SecurityGuardLoginPageComponent {

  emailId=""
  password=""

  constructor(private api:ApiService,private route:Router){}


  sgLoginCheck=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}

    console.log(data)

    this.api.SecurityGuardLogin(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          localStorage.setItem("sgInfo",response.id)

          alert("valid login")

          this.route.navigate(["/securityGuardProfile"])
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
