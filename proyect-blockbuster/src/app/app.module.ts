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
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListMoviesComponent } from './components/admin/list-movies/list-movies.component';
const appRoutes:Routes=[
  {path:'',component:NavigationComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:`admin/movies`,component:ListMoviesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    EmployeeComponent,
    AdminHomeComponent,
    ListMoviesComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    AuthModule,
    HttpClientModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
