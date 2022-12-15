import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {

  username=""
  password=""

  constructor(private route:Router){}

  adminLoginCheck=()=>
  {
    if(this.username=="admin" && this.password=="12345")
    {
      this.route.navigate(["/adminProfile"])
    }
    else
    {
      alert("Invalid login")
      this.username=""
      this.password=""

    }
  }

}
