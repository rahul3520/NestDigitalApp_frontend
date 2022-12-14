import { Component } from '@angular/core';

@Component({
  selector: 'app-security-guard-loginbar',
  templateUrl: './security-guard-loginbar.component.html',
  styleUrls: ['./security-guard-loginbar.component.css']
})
export class SecurityGuardLoginbarComponent {

  sgID:any=localStorage.getItem("sgInfo")

}
