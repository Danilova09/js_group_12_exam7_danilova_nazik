import {Component} from '@angular/core';
import {count} from "rxjs/operators";

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.css']
})
export class ItemsBlockComponent {

  // this.price = this.getPrice();

  items = [
    {name: 'coffee', price: 70, imgIcon: 'fas fa-coffee', bgColor: '#ececec', iconColor: 'rgb(146, 68, 68)', count: 0},
    {name: 'tea', price: 50, imgIcon: 'fas fa-mug-hot', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'water', price: 70, imgIcon: 'fas fa-water', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'wine', price: 70, imgIcon: 'fas fa-wine-glass', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'martini', price: 70, imgIcon: 'fas fa-glass-martini-alt', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'whiskey', price: 70, imgIcon: 'fas fa-glass-whiskey', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'beer', price: 70, imgIcon: 'fas fa-beer', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'lemon', price: 70, imgIcon: 'fas fa-lemon', bgColor: '#ececec', iconColor: 'black', count: 0},
    {name: 'mint', price: 70, imgIcon: 'fas fa-seedling', bgColor: '#ececec', iconColor: 'black', count: 0},
  ]

  getNewDrink(index: number) {
    this.items[index].count++;
  }

  deleteItem(index: number) {
      this.items[index].count = 0;
  }


  getPrice() {
    let sum = 0;
    this.items.forEach(element => {
      sum += element.price * element.count;
    })
    return sum;
  }

}
