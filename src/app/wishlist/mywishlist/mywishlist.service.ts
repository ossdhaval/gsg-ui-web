import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IWishlist } from "../wishlist";
import { AppComponent } from "../../app.component";


@Injectable({
    providedIn: 'root'
})

export class MyWishlistService
{

    private getProductByIdUrl = 

    constructor(private httpclient: HttpClient){}

    getEventById(id: number): Observable
    {
        return this.httpclient.get<IWishlit>(AppComponent.getWishlistByIdUrl)
        .pipe( tap(data => console.log('All: '+JSON.stringify(data)))
        );
    }
}