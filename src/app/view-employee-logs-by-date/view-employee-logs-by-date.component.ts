import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-logs-by-date',
  templateUrl: './view-employee-logs-by-date.component.html',
  styleUrls: ['./view-employee-logs-by-date.component.css']
})
export class ViewEmployeeLogsByDateComponent {

  date=""

  searchData:any=[]

  constructor(private api:ApiService){}

  SearchEmployeeLogs=()=>
  {

    let data:any={"date":this.date}

    console.log(data)

    this.api.ViewEmployeeLogsByDate(data).subscribe(

      (response:any)=>
      {

        const obj = response 

        const length = Object.keys(obj).length;

        console.log(length)

        if(length==0)
        {
          alert("No Employee Logs found for the date...Try another date")

          // this.date=""
        }
        else
        {
          alert("Employee logs Found for the date!")

          console.log(response)

          this.searchData=response
        }

      

      }

    )

  }


}
