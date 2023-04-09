import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/modules/types/employe';
import {EmployeeService} from 'src/app/services/employee.service'
import { NewemployeeformComponent } from '../newemployeeform/newemployeeform.component';
import { SetPasswordComponent } from '../set-password/set-password.component';
import { UpdateemployeeformComponent } from '../updateemployeeform/updateemployeeform.component';

type employee={
  _id:String,
  email:String,
  username:String,
  password:String,
  age:Number,
  phone_number:String,
  roles:[],
  fullname:String
};
let employees:employee[];
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  options:string[]=["fullname","username","phone_number"];
  payload={
    field:"",
    value:"",
    orderField:"fullname",
    order:1
  }
  nArrow="";
  aArrow="";
  displayedColumns:string[]=['fullname','email','username','age','phone_number','roles','password','actions']
  dataSource=new MatTableDataSource(employees);
  constructor(private employeeService:EmployeeService, public dialog:MatDialog){}
  ngOnInit(): void {
    localStorage.setItem('activePath','employees');
    this.employeeService.getEmployees().subscribe(response=>{this.dataSource=response,console.log(response)})
  }
  nOrder(){
    this.payload.order=this.payload.order*-1;
    this.nArrow=""
    if(this.payload.order==1)this.nArrow="↑"
    if(this.payload.order==-1)this.nArrow="↓"
    this.payload.orderField="fullname"
    this.findByTags();
  }
  aOrder(){
    this.payload.order=this.payload.order*-1;
    this.aArrow=""
    if(this.payload.order==1)this.aArrow="↑"
    if(this.payload.order==-1)this.aArrow="↓"
    this.payload.orderField="age"
    this.findByTags();
  }
  findByTags(){
    if(this.payload.field==="" || this.payload.value===""){
      this.employeeService.sortBy(this.payload.orderField,this.payload.order).subscribe(resp=>{this.dataSource=resp})
    }else{
      this.employeeService.findByTags(this.payload.field,this.payload.value,this.payload.orderField,this.payload.order).subscribe(resp=>{this.dataSource=resp});
    }
  }
  addEmployee(){
    const dialogRef=this.dialog.open(NewemployeeformComponent,{width:"35%"});
  }
  updateEmployee(employee:Employee){
    const dialogRef=this.dialog.open(UpdateemployeeformComponent,{data:employee, width:"35%"})
  }
  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe(response=>{console.log(response)});
    window.location.reload();
  }
  changePassword(employee:Employee){
    const dialogRef=this.dialog.open(SetPasswordComponent,{data:employee,width:"35%"})
  }
}
