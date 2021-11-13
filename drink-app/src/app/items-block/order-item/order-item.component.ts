import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input() title = '';
  @Input() count = 0;
  @Input() price = 0;
  @Output() delete = new EventEmitter();

  deleteItem() {
    this.delete.emit();
  }


}
