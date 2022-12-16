import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-entry',
  templateUrl: './visitor-entry.component.html',
  styleUrls: ['./visitor-entry.component.css']
})
export class VisitorEntryComponent {

  name=""
  purpose=""
  whomToMeet=""

  constructor(private api:ApiService){}

  LogVisitorEntry=()=>
  {

    let data:any={"name":this.name,"purpose":this.purpose,"whomToMeet":this.whomToMeet} 

    console.log(data)

    this.api.AddVisitorEntry(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if (response.status=="visitor entry logged") 
        {
          alert("Visitor Entry logged successfully!")
          
          this.name=""
          this.purpose=""
          this.whomToMeet=""

        } 
        else 
        {
          alert("Failed to log visitor entry..Try again")  
        }

      }

    )

  }

}
