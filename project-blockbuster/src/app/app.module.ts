//IMPORTACIONES//
//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { materialModules } from './types/material-modules';
import { AuthModule } from './modules/auth/auth.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

//Componentes
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation/navigation.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee/employee.component'; 
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListMoviesComponent } from './components/admin/list-movies/list-movies.component';
import { NewmovieformComponent } from './components/admin/newmovieform/newmovieform.component';
import { UpdatemovieformComponent } from './components/admin/updatemovieform/updatemovieform.component';
import { ListEmployeesComponent } from './components/admin/list-employees/list-employees.component';
import { NewemployeeformComponent } from './components/admin/newemployeeform/newemployeeform.component';
import { UpdateemployeeformComponent } from './components/admin/updateemployeeform/updateemployeeform.component';
import { SetPasswordComponent } from './components/admin/set-password/set-password.component';
import { ListGamesComponent } from './components/admin/games/list-games/list-games.component';
import { NewgameformComponent } from './components/admin/games/newgameform/newgameform.component';
import { UpdategameformComponent } from './components/admin/games/updategameform/updategameform.component';
import { ListCustomerComponent } from './components/admin/customer/list-customer/list-customer.component';
import { ListSalesComponent } from './components/admin/sales/list-sales/list-sales.component';
import { EmployeeHomeComponent } from './components/employee/screens/employee-home/employee-home.component';
import { NewsaleformComponent } from './components/employee/screens/newsaleform/newsaleform.component';

//Rutas para la navegación de componentes para administrador
const appRoutes:Routes=[
  {path:'',component:NavigationComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:`admin/movies`,component:ListMoviesComponent},
  {path:`admin/employees`,component:ListEmployeesComponent},
  {path:'admin/games',component:ListGamesComponent},
  {path:`admin/customers`,component:ListCustomerComponent},
  {path:`admin/sales`,component:ListSalesComponent},
//Rutas para la navegación de componentes para empleado
  {path:`employee`,component:EmployeeComponent},
  {path:`employee/home`,component:EmployeeHomeComponent},
  {path:`employee/movies`,component:ListMoviesComponent},
  {path:`employee/games`,component:ListGamesComponent},
]

//Se declaran los componentes para exportar y poder usar en toda la aplicación
@NgModule({
  declarations: [
    AppComponent,//Componente principal, permite desplegar los componentes encima
    NavigationComponent,//Componente de navegación, permite de moverse entre componentes
    AdminComponent,//Componente principal de administrador
    EmployeeComponent,//Componente principal de empleado
    AdminHomeComponent,//Vista de administrador
    ListMoviesComponent,//Vista de lista películas
    NewmovieformComponent,//Formulario para agregar nuevas películas
    UpdatemovieformComponent,//Formulario para actualización de películas
    ListEmployeesComponent,//Vista de lista de empleados
    NewemployeeformComponent,//Formulario para agregar nuevos empleados
    UpdateemployeeformComponent,//Formulario para actualizar empleados
    SetPasswordComponent,//Formulario para actualizar contraseña de empleado
    ListGamesComponent,//Vista de lista de juegos
    NewgameformComponent,//Formulario para agregar juegos
    UpdategameformComponent,//Formulario para actualizar juegos
    ListCustomerComponent,//Vista de lista de clientes
    ListSalesComponent,//Vista de lista de ventas
    EmployeeHomeComponent,//Vista de empleado
    NewsaleformComponent,//Formulario para agregar una nueva venta
  ],

//Se importan los módulos para usarse en toda la aplicación
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    AuthModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
