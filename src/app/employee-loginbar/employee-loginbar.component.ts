import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-loginbar',
  templateUrl: './employee-loginbar.component.html',
  styleUrls: ['./employee-loginbar.component.css']
})
export class EmployeeLoginbarComponent {

  empID:any=localStorage.getItem("empInfo")

}
