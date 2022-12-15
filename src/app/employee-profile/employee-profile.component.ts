import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  empID:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.empID=localStorage.getItem("empInfo")

    let data:any={"id":this.empID}

    this.api.GetEmployeeProfile(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )


  }

}
