import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  profile: boolean = false;
  menu: boolean = false;

  constructor() {}

  openProfile(): void {
    this.profile = !this.profile;
  }

  openMenu(): void {
    this.menu = !this.menu;
  }

  ngOnInit(): void {}
}
