import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-employee-logs',
  templateUrl: './view-all-employee-logs.component.html',
  styleUrls: ['./view-all-employee-logs.component.css']
})
export class ViewAllEmployeeLogsComponent {

  empId=""
  date=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllEmployeeLogs().subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }

    )

  }

  LogEmployeeExit=()=>
  {

    let data:any={"empId":this.empId,"date":this.date}

    console.log(data)

    this.api.UpdateEmployeeExitTime(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if(response.status=="employee exit logged")
        {
          alert("Employee exit time is logged!")
          this.empId=""
          this.date=""
        }
        else
        {
          alert("Failed to log employee exit time..Try again")
        }

      }

    )

  }

}
