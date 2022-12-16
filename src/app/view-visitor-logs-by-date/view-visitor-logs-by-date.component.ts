import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitor-logs-by-date',
  templateUrl: './view-visitor-logs-by-date.component.html',
  styleUrls: ['./view-visitor-logs-by-date.component.css']
})
export class ViewVisitorLogsByDateComponent {

  date=""

  searchData:any=[]

  constructor(private api:ApiService){}

  SearchVisitorLogs=()=>
  {

    let data:any={"date":this.date}

    console.log(data)

    this.api.ViewVisitorLogsByDate(data).subscribe(

      (response:any)=>
      {

        const obj = response 

        const length = Object.keys(obj).length;

        console.log(length)

        if(length==0)
        {
          alert("No Visitor Logs found for the date...Try another date")
          
          // this.date=""
        }
        else
        {
          alert("Visitor logs Found for the date!")

          console.log(response)

          this.searchData=response
        }

      

      }

    )

  }

}
