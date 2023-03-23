import { Component,OnInit } from '@angular/core';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private loginStateService:LoginStateService){}

  ngOnInit(): void {
  }

}
