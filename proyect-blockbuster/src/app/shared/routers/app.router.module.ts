import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/components/login/login.component";
import { NavigationComponent } from "../navigation/navigation/navigation.component";

const routes:Routes=[
    {
        path:`/auth`, component:LoginComponent
    },
]