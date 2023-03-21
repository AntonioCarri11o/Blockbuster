import { Routes } from "@angular/router";
import { AdminHomeComponent } from "src/app/components/admin/admin-home/admin-home.component";
import { AdminComponent } from "src/app/components/admin/admin.component";
import { ListEmployeesComponent } from "src/app/components/admin/list-employees/list-employees.component";
import { ListMoviesComponent } from "src/app/components/admin/list-movies/list-movies.component";
import { SigninComponent } from "src/app/modules/auth/pages/signin/signin.component";
import { NavigationComponent } from "../navigation/navigation/navigation.component";

const routes:Routes=[
    {path:`/auth`, component:SigninComponent},
    {path:`/admin`,component:AdminComponent,pathMatch:'full'},
    {path:`/admin/home`,component:AdminHomeComponent},
    {path:`/admin/movies`,component:ListMoviesComponent},
    {path:`/admin/employees`,component:ListEmployeesComponent}
]