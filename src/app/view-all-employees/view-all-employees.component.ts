import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent {

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllEmployee().subscribe(


      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )

  }


}
