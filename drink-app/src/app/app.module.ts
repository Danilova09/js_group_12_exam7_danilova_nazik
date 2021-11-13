import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsBlockComponent } from './items-block/items-block.component';
import { ItemComponent } from './items-block/item/item.component';
import { OrderItemComponent } from './items-block/order-item/order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsBlockComponent,
    ItemComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
