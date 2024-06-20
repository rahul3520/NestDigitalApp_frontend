import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  empCode=""
  NewempCode=""
  id=""
  name=""
  designation=""
  salary=""
  phoneNo=""
  emailId=""
  password=""

  searchData:any=[]

  constructor(private api:ApiService){}

  EmployeeSearch=()=>
  {

    let data:any={"empCode":this.empCode}

    console.log(data)

    this.api.EmployeeSearchUsingCode(data).subscribe(

      (response:any)=>
      {
        const obj = response 

        const length = Object.keys(obj).length;

        console.log(length)

        if(length==0)
        {
          alert("Employee does not exist in database!")
        }
        else
        {
          alert("Employee Found!")

          console.log(response)

          this.searchData=response
        }
      }

    )

  }

  

  UpdateEmployee=(EmployeeID:any)=>
  {

    let data:any={"id":EmployeeID,"empCode":this.NewempCode,"name":this.name,"designation":this.designation,"salary":this.salary,"phoneNo":this.phoneNo,"emailId":this.emailId,"password":this.password}


    this.api.EmployeeUpdate(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="updated employee record!")
        {
          alert("Employee record updated successfully!")

          this.NewempCode=""
          this.name=""
          this.designation=""
          this.salary=""
          this.phoneNo=""
          this.emailId=""
          this.password=""

        }
        else
        {
          alert("Failed to update employee record.Try again")
        }

      }
    )
  }


}
