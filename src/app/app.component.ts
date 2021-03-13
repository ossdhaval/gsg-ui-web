import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static getWishlistByIdUrl: string = "http://172.17.0.1:8080/api/event/";
  title = 'gsg-ui-web';
}
