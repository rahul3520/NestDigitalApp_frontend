import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-grant-leaves',
  templateUrl: './employee-grant-leaves.component.html',
  styleUrls: ['./employee-grant-leaves.component.css']
})
export class EmployeeGrantLeavesComponent {

  empId=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllLeaveCountOfAllEmployess().subscribe(

      (response:any)=>
      {
        console.log(response)
        this.searchData=response
      }

    )

  }

  GrantLeavesForEmployee=()=>
  {

    let data:any={"empId":this.empId}

    this.api.AddEmployeeToLeaveCountDB(data).subscribe(

      (response:any)=>
      {
        if(response.status=="employee added to leave count")
        {
          alert("Employee granted leaves for this year!")

          this.empId=""
        }
        else
        {
          alert("Failed to grant leaves for employee..Try again")
        }

      }

    )

  }

}
