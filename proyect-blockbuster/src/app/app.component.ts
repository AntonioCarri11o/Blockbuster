import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
    if(this.router.url==="/" && localStorage.getItem('role')==="admin"){
      this.router.navigateByUrl("/admin/home")
    }
  }

  title = 'proyect-blockbuster';

}
