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
//import { NewMovieFormComponent } from './components/admin/new-movie-form/new-movie-form.component';
const appRoutes:Routes=[
  {path:'',component:NavigationComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:`admin/movies`,component:ListMoviesComponent},
  {path:`admin/employees`,component:ListEmployeesComponent}
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
