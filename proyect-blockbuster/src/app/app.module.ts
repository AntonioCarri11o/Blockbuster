import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { NavigationComponent } from './shared/navigation/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/admin/list-employees/list-employees.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
const appRoutes:Routes=[
  {path:'',component:NavigationComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    ListEmployeesComponent,
    AdminNavbarComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
