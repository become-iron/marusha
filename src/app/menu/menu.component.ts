import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show_menu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.show_menu = !this.show_menu;
  }

}
