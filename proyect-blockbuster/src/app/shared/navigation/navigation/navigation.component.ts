import { Component } from '@angular/core';
import { BreakpointObserver,Breakpoints } from "@angular/cdk/layout";
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
  ){}
}
