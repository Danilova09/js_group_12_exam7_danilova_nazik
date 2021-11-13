import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() title = '';
  @Input() Price = 0;
  @Input() imgIcon = '';


}
