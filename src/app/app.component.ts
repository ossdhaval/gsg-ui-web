import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static getWishlistByIdUrl: string = "https://172.17.0.1:8443/api/event/c1413b13-7902-46f8-941d-b2e4a307fa55";
  title = 'gsg-ui-web';
}
