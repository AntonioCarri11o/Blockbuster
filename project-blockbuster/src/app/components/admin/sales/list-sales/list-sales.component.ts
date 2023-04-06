import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/modules/types/sale';
import { SaleService } from 'src/app/services/sale.service';

let sales:Sale[];

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit {
  displayedColumns:string[]=['customer','product'];
  dataSource=new MatTableDataSource(sales);
  constructor(private saleService:SaleService){}
  ngOnInit(): void {
    localStorage.setItem('activePath',"sales");
    this.saleService.getSales().subscribe(response=>{this.dataSource=response,console.log(response)});
    console.log(this.dataSource)
  }
}
