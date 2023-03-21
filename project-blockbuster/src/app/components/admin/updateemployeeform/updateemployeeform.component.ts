import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modules/types/employe';
import { EmployeeService } from 'src/app/services/employee.service';
import { NewemployeeformComponent } from '../newemployeeform/newemployeeform.component';

@Component({
  selector: 'app-updateemployeeform',
  templateUrl: './updateemployeeform.component.html',
  styleUrls: ['./updateemployeeform.component.css']
})
export class UpdateemployeeformComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private employeeService:EmployeeService, public dialog:MatDialogRef<NewemployeeformComponent>, @Inject(MAT_DIALOG_DATA)public employee:Employee){}
  close(){
    this.dialog.close()
  }
  update(){
    this.employeeService.updateEmployee(this.employee).subscribe(response=>{console.log(response)})
  }
}
