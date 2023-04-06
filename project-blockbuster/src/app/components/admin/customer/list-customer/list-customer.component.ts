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
  displayedColumns:string[]=['name','address','phone_number'];
  dataSource=new MatTableDataSource(customers);
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(response=>{this.dataSource=response})
    localStorage.setItem('activePath','customers');
    console.log(customers)
  }
}
