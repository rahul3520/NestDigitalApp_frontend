import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-my-leave-status',
  templateUrl: './view-my-leave-status.component.html',
  styleUrls: ['./view-my-leave-status.component.css']
})
export class ViewMyLeaveStatusComponent {


  searchData:any=[]

  constructor(private api:ApiService){

    let data:any={"empId":localStorage.getItem("empInfo")}

    console.log(data)

    this.api.ViewAppliedLeaveStatus(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        const obj = response 

        const length = Object.keys(obj).length;

        console.log(length)

        if(length==0)
        {
          alert("No Leaves applied found!")
        }
        else
        {
          alert("Leaves applied found!")

          // console.log(response)

          this.searchData=response
        }


      }

    )

  }

}
