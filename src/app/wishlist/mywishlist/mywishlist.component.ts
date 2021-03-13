import { Component, OnInit } from '@angular/core';
import { MyWishlistService } from './mywishlist.service';

@Component({
  selector: 'mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {

  constructor(private myWishlistService: MyWishlistService) {

    console.log("constructor .. ");
   }

  ngOnInit(): void {
    console.log("Initialized .. ");
    this.myWishlistService.getEventById('c1413b13-7902-46f8-941d-b2e4a307fa55');

    
  }

}
