import { createReducer, on } from "@ngrx/store";
import { load } from "./products.actions";

const products: any[] = [];

const initialstate = {
    products:  products
}

export const productReducer = createReducer(
    initialstate,
    on(load, (state, { products }) => {
        return {
            products: [... products]
        }
    }),
    //opera igual pero esta simplificado
    //on(load, (state, { products }) => ({ products: [... products]})
)