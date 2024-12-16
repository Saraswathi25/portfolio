import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  constructor() { }

  ngOnInit(): void {
  }


  navToggle() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  

}
