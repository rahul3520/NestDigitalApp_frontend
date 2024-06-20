import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {


  empId=""

  constructor(private api:ApiService){}

  LogEmployeeEntry=()=>
  {

    let data:any={"empId":this.empId}

    console.log(data)

    this.api.AddEmployeeEntry(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if (response.status=="employee entry logged") 
        {
          alert("Employee Entry logged successfully!")
          
          this.empId=""

        } 
        else 
        {
          alert("Failed to log employee entry..Try again")  
        }

      }

    )

  }

}
