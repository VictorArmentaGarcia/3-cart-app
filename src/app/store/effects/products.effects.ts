import { Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { findAll, load } from "../products.actions";
import { catchError, EMPTY, exhaustMap, map, of } from "rxjs";

@Injectable()
export class ProductsEffects {

    loadProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(load),
            exhaustMap(() => this.productService.findAll())
            //es lo mismo
            //exhaustMap(() => of(this.productService.findAll())) 
        ).pipe(
            map( products => ( findAll({products }))),
            catchError(() => EMPTY)
        )
    ); 
    
    constructor(private actions$: Actions,
        private productService: ProductService){

    }



}