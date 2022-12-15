import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-guard-profile',
  templateUrl: './security-guard-profile.component.html',
  styleUrls: ['./security-guard-profile.component.css']
})
export class SecurityGuardProfileComponent {


  sgID:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.sgID=localStorage.getItem("sgInfo")

    let data:any={"id":this.sgID}

    this.api.SecurityGuardProfile(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )


  }

}
