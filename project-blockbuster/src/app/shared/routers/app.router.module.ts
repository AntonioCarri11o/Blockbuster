import { Routes } from "@angular/router";
import { AdminHomeComponent } from "src/app/components/admin/admin-home/admin-home.component";
import { AdminComponent } from "src/app/components/admin/admin.component";
import { ListCustomerComponent } from "src/app/components/admin/customer/list-customer/list-customer.component";
import { ListGamesComponent } from "src/app/components/admin/games/list-games/list-games.component";
import { ListEmployeesComponent } from "src/app/components/admin/list-employees/list-employees.component";
import { ListMoviesComponent } from "src/app/components/admin/list-movies/list-movies.component";
import { ListSalesComponent } from "src/app/components/admin/sales/list-sales/list-sales.component";
import { EmployeeComponent } from "src/app/components/employee/employee/employee.component";
import { EmployeeHomeComponent } from "src/app/components/employee/screens/employee-home/employee-home.component";
import { SigninComponent } from "src/app/modules/auth/pages/signin/signin.component";
import { NavigationComponent } from "../navigation/navigation/navigation.component";

const routes:Routes=[
    {path:`/auth`, component:SigninComponent},
    {path:`/admin`,component:AdminComponent,pathMatch:'full'},
    {path:`/admin/home`,component:AdminHomeComponent},
    {path:`/admin/movies`,component:ListMoviesComponent},
    {path:`/admin/employees`,component:ListEmployeesComponent},
    {path:`/admin/games`,component:ListGamesComponent},
    {path:`/admin/customers`,component:ListCustomerComponent},
    {path:`/admin/sales`,component:ListSalesComponent},
    
    {path:`/employee`,component:EmployeeComponent},
    {path:`/employee/home`,component:EmployeeHomeComponent},
    {path:`/employee/movies`,component:ListMoviesComponent},
    {path:`/employee/games`,component:ListGamesComponent},
]