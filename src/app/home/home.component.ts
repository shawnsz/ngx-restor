import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Menus: any[];

  constructor() {
    this.Menus = [];
    this.Menus.push({
      MenuId: 1,
      MenuName: 'Hot Spinach & Artichoke Dip',
      Price: 26.99
    });
    this.Menus.push({
      MenuId: 2,
      MenuName: 'Slow Roasted Prime Rib',
      Price: 42.99
    });
    this.Menus.push({
      MenuId: 3,
      MenuName: 'Portobello Mushroom Chicken',
      Price: 36.69
    });
  }

  ngOnInit() {
  }

}
