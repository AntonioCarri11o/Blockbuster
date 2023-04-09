//COMPONENTE PRINCIPAL DE LA APLICACIÓN

//Importaciones
import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Método constructor
  constructor(private router:Router){//Router permite implemantar métodos para navegación entre componentes y obtener información sobre la ruta
    /*Establece la navegación por roles, la variable de almacenamiento local 'role' almacena el nombre del rol
    de empleado*/
    if(this.router.url==="/" && localStorage.getItem('role')==="admin"){
      //La variable de almacenamiento local 'activePath' se concarena a la navegación para redigir al último componente dentro del rol de administrador.
      this.router.navigateByUrl(`/admin/${localStorage.getItem('activePath')}`)
    }
    if(this.router.url==="/" && localStorage.getItem('role')==="employee"){
      //La variable de almacenamiento local 'activePath' se concarena a la navegación para redigir al último componente dentro del rol de empleado.
      this.router.navigateByUrl(`/employee/${localStorage.getItem('activePath')}`)
    }
  }

  title = 'proyect-blockbuster';

}
