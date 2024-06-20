import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-my-leaves',
  templateUrl: './view-my-leaves.component.html',
  styleUrls: ['./view-my-leaves.component.css']
})
export class ViewMyLeavesComponent {

  empID:any=""
  searchData:any=[]

  constructor(private api:ApiService){

    this.empID=localStorage.getItem("empInfo")

    let data:any={"empId":localStorage.getItem("empInfo")}

    console.log(data)

    this.api.ViewMyLeavesForCurrentYear(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        this.searchData=response

      }


    )

  }



}
