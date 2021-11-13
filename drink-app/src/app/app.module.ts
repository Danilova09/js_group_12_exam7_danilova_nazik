import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsBlockComponent } from './items-block/items-block.component';
import { ItemComponent } from './items-block/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsBlockComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
