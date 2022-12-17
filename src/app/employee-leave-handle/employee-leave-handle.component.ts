import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-leave-handle',
  templateUrl: './employee-leave-handle.component.html',
  styleUrls: ['./employee-leave-handle.component.css']
})
export class EmployeeLeaveHandleComponent {

  id=""
  empId=""
  leaveType=""
  leaveStatus=""

  // casualLeaveCount=""
  // sickLeaveCount=""
  // specialLeaveCount=""

  remCL:any=""
  remSL:any=""
  remOL:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewLeaveApplicationJoinedWithLeaveCount().subscribe(

      (response3)=>
      {
        console.log(response3)

        this.searchData=response3
      }

    )
  }


  LeaveApproval=()=>
  {

    let data:any={"id":this.id,"empId":this.empId,"leaveType":this.leaveType,"leaveStatus":this.leaveStatus} 

    console.log(data)

    this.api.HandleLeave(data).subscribe(

      (response:any)=>
      {

        if (response.status == "leave approved") 
        {

          alert("Updating Leave request as approved for the employee")

          localStorage.setItem("empInfo",response.empId)
          localStorage.setItem("leavetype",response.leaveType)

          let data1:any={"empId":localStorage.getItem("empInfo")}

          this.api.ViewMyLeavesForCurrentYear(data1).subscribe(

            (response1:any)=>
            {

              const obj = response1 

              const length = Object.keys(obj).length;

              console.log(length)

              if(length==0)
              {
                alert("Employee not granted leaves for the year!")
              }
              else
              {
                alert("Employee Found in Leave count database!")

                console.log(response1)

                localStorage.setItem("casualLeaveCount",response1.casualLeave)
                localStorage.setItem("sickLeaveCount",response1.sickLeave)
                localStorage.setItem("specialLeaveCount",response1.specialLeave)

                this.remCL=localStorage.getItem("casualLeaveCount")
                this.remSL=localStorage.getItem("sickLeaveCount")
                this.remOL=localStorage.getItem("specialLeaveCount")
                // this.searchData=response

                
                  let data2:any={"empId":localStorage.getItem("empInfo"),"leaveType":localStorage.getItem("leavetype"),"casualLeave":localStorage.getItem("casualLeaveCount"),"sickLeave":localStorage.getItem("sickLeaveCount"),"specialLeave":localStorage.getItem("specialLeaveCount")} 
                  
                  this.api.ReduceLeaveCount(data2).subscribe(

                    (response2:any)=>
                    {
                      console.log(response2)

                      if(response2.status=="casual leave approved")
                      {
                        alert("Reducing casual leave count for the employee")

                        localStorage.setItem("casualLeaveCount",response2.remainingCasualLeaves)
                                
                        this.remCL=localStorage.getItem("casualLeaveCount")
                      

                      }
                      else if(response2.status=="No more casual leaves remaining")
                      {
                        alert("No more casual leaves remaining for the employee")
                      }

                      else if(response2.status=="sick leave approved")
                      {
                        alert("Reducing sick leave count for the employee")

                        localStorage.setItem("sickLeaveCount",response2.remainingSickLeaves)

                        this.remSL=localStorage.getItem("sickLeaveCount")
                        
                      }
                      else if(response2.status=="No more sick leaves remaining")
                      {
                        alert("No more sick leaves remaining for the employee")
                      }
                      else if(response2.status=="special leave approved")
                      {
                        alert("Reducing special leave count for the employee")

                        localStorage.setItem("specialLeaveCount",response2.remainingSpecialLeaves)

                        this.remOL=localStorage.getItem("specialLeaveCount")
                      }
                      else if(response2.status=="No more special leaves remaining")
                      {
                        alert("No more special leaves remaining for the employee")
                      }
                      else
                      {

                        alert("Failed to reduce leave count for the employee..Try again")
                      }


                    }

                  )


              }

           
            }


          )


        } 
        else if(response.status == "leave not approved")
        {

          alert("Updating leave request as rejected for the employee")
          
        }
        else
        {

          alert("Updating leave request as processing for the employee")
        }

      }

    )
  }
}
