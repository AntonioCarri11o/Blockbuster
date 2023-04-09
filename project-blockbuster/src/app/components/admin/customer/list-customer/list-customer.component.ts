import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/modules/types/customer';
import { CustomerService } from 'src/app/services/custumer.service';

let customers:Customer[]
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit{
  options=["name","address"];
  payload={
    field:"",
    value:"",
    orderField:"name",
    order:1
  }
  nArrow="";
  aArrow="";
  displayedColumns:string[]=['name','address','phone_number'];
  dataSource=new MatTableDataSource(customers);
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(response=>{this.dataSource=response})
    localStorage.setItem('activePath','customers');
    console.log(customers)
  }
  nOrder(){
    this.payload.order=this.payload.order*-1;
    this.aArrow=""
    if(this.payload.order==1)this.nArrow="↑"
    if(this.payload.order==-1)this.nArrow="↓"
    this.payload.orderField="name"
    this.findByTags();
  }
  aOrder(){
    this.payload.order=this.payload.order*-1;
    this.nArrow=""
    if(this.payload.order==1)this.aArrow="↑"
    if(this.payload.order==-1)this.aArrow="↓"
    this.payload.orderField="address"
    this.findByTags();
  }
  findByTags(){
  if(this.payload.field===""||this.payload.value===""){
    this.customerService.sortBy(this.payload.orderField,this.payload.order).subscribe(response=>{this.dataSource=response});
  }else{
    this.customerService.findByTags(this.payload.field,this.payload.value,this.payload.orderField,this.payload.order).subscribe(response=>{this.dataSource=response});
  }
  }
}
