import {Component} from '@angular/core';
import {count} from "rxjs/operators";

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.css']
})
export class ItemsBlockComponent {

  items = [
    {name: 'coffee', price: 70, imgIcon: 'fas fa-coffee', bgColor: 'rgba(146, 68, 68, 0.5)', iconColor: 'rgb(146, 68, 68)', count: 0},
    {name: 'tea', price: 50, imgIcon: 'fas fa-mug-hot', bgColor: 'rgba(78, 165, 78, 0.5)', iconColor: 'rgb(78, 165, 78)', count: 0},
    {name: 'water', price: 70, imgIcon: 'fas fa-water', bgColor: 'rgba(0, 124, 196, 0.5)', iconColor: 'rgb(0, 124, 196)', count: 0},
    {name: 'wine', price: 70, imgIcon: 'fas fa-wine-glass', bgColor: 'rgba(197, 12, 12, 0.5)', iconColor: 'rgb(197, 12, 12)', count: 0},
    {name: 'martini', price: 70, imgIcon: 'fas fa-glass-martini-alt', bgColor: 'rgba(0, 184, 184, 0.5)', iconColor: 'rgb(0, 184, 184)', count: 0},
    {name: 'whiskey', price: 70, imgIcon: 'fas fa-glass-whiskey', bgColor: 'rgba(70, 6, 6, 0.5)', iconColor: 'rgb(70, 6, 6)', count: 0},
    {name: 'beer', price: 70, imgIcon: 'fas fa-beer', bgColor: 'rgba(218, 167, 0, 0.6)', iconColor: 'rgb(218, 167, 0)', count: 0},
    {name: 'lemon', price: 70, imgIcon: 'fas fa-lemon', bgColor: 'rgba(241, 198, 56, 0.5)', iconColor: 'rgb(241, 198, 56)', count: 0},
    {name: 'mint', price: 70, imgIcon: 'fas fa-seedling', bgColor: 'rgba(0, 128, 0, 0.5)', iconColor: 'green', count: 0},
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
