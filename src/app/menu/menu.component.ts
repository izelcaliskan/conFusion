import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from "../shared/dishes"


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  isVisible: Boolean = false;

  clickEvent() {
    if (this.isVisible == true) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    // let insan = {
    //   adi: 'alper',
    //   soyadi: 'ozhan'
    // };

    // insan.adi = 'izel';
    // insan.soyadi = 'ozhan';
  }

  dishes = DISHES;

 /*  selectedDish: Dish; tıkladıgında acılmasını istiyosan */ 
  selectedDish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
