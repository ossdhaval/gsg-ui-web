import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MywishlistComponent } from './wishlist/mywishlist/mywishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    MywishlistComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
