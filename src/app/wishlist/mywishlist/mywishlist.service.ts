import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IWishlist } from "../wishlist";
import { AppComponent } from "../../app.component";


@Injectable({
    providedIn: 'root'
})

export class MyWishlistService
{

    //private getProductByIdUrl = "https://172.17.0.1:8443/api/event/c1413b13-7902-46f8-941d-b2e4a307fa55";

    constructor(private httpclient: HttpClient){}

    getEventById(id: string): Observable<IWishlist>
    {
        return this.httpclient.get<IWishlist>(`${AppComponent.getWishlistByIdUrl}/${id}`)
        .pipe( tap(data => console.log('All: '+JSON.stringify(data)))
        );
    }
}