import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
    if(this.router.url==="/" && localStorage.getItem('role')==="admin"){
      /*
      switch(localStorage.getItem("activePath")){
        case "movies":
          this.router.navigateByUrl("/admin/movies")
          break;
        case "employees":
          this.router.navigateByUrl("/admin/employees")
          break;
        case "games":
        this.router.navigateByUrl("/admin/games")
        break;
        case "customers":
          this.router.navigateByUrl("admin/customers")
          break;
        case "sales":
          this.router.navigateByUrl("/admin/sales")
          break;
        default:
          this.router.navigateByUrl("/admin/home")
          break;
      }*/
      this.router.navigateByUrl(`/admin/${localStorage.getItem('activePath')}`)
    }
    if(this.router.url==="/" && localStorage.getItem('role')==="employee"){
      /*
      switch(localStorage.getItem("activePath")){
        case "movies":
          this.router.navigateByUrl("/employee/movies")
          break;
        default:
          this.router.navigateByUrl("/employee/home")
          break;
      }*/
      this.router.navigateByUrl(`/employee/${localStorage.getItem('activePath')}`)
    }
  }

  title = 'proyect-blockbuster';

}
