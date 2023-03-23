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
        default:
          this.router.navigateByUrl("/admin/home")
          break;
      }
    }
  }

  title = 'proyect-blockbuster';

}
