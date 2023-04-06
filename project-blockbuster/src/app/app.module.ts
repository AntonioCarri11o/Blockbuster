import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './shared/navigation/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { materialModules } from './types/material-modules';
import { AuthModule } from './modules/auth/auth.module';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee/employee.component'; 
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListMoviesComponent } from './components/admin/list-movies/list-movies.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
//import { NewMovieFormComponent } from './components/admin/new-movie-form/new-movie-form.component';
const appRoutes:Routes=[
  {path:'',component:NavigationComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:`admin/movies`,component:ListMoviesComponent},
  {path:`admin/employees`,component:ListEmployeesComponent},
  {path:'admin/games',component:ListGamesComponent},
  {path:`admin/customers`,component:ListCustomerComponent},
  {path:`admin/sales`,component:ListSalesComponent},

  {path:`employee`,component:EmployeeComponent},
  {path:`employee/home`,component:EmployeeHomeComponent},
  {path:`employee/movies`,component:ListMoviesComponent},
  {path:`employee/games`,component:ListGamesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    EmployeeComponent,
    AdminHomeComponent,
    ListMoviesComponent,
    NewmovieformComponent,
    UpdatemovieformComponent,
    ListEmployeesComponent,
    NewemployeeformComponent,
    UpdateemployeeformComponent,
    SetPasswordComponent,
    ListGamesComponent,
    NewgameformComponent,
    UpdategameformComponent,
    ListCustomerComponent,
    ListSalesComponent,
    EmployeeHomeComponent,
    //NewMovieFormComponent,

  ],
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
