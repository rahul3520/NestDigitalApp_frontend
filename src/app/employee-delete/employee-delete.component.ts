import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {

  empCode=""
 

  searchData:any=[]

  constructor(private api:ApiService){}

  EmployeeSearch=()=>
  {

    let data:any={"empCode":this.empCode}

    console.log(data)

    this.api.EmployeeSearchUsingCode(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        this.searchData=response

      }

    )

  }

  // id=""
  // name=""
  // designation=""
  // salary=""
  // phoneNo=""
  // emailId=""

  DeleteEmployee=(EmployeeID:any)=>
  {
    let data:any={"id":EmployeeID}

    this.api.EmployeeDelete(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="employee deleted")
        {
          alert("Employee deleted successfully!")

          // this.id=""
          // this.name=""
          // this.designation=""
          // this.salary=""
          // this.phoneNo=""
          // this.emailId=""


        }
        else
        {
          alert("Failed to delete employee.Try again")
        }

      }
    )
  }

}
