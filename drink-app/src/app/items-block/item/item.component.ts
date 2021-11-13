import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Output() newDrink = new EventEmitter();
  @Input() title = '';
  @Input() Price = 0;
  @Input() imgIcon = '';
  @Input() bgColor = '';
  @Input() iconColor = '';

  addNewDrink() {
    this.newDrink.emit();
  }

}
