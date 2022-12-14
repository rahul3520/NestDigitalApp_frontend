import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

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

}
