import { createReducer, on } from "@ngrx/store";
import { findAll, load } from "./products.actions";

const products: any[] = [];

const initialstate = {
    products:  products
}

export const productReducer = createReducer(
    initialstate,
    //opera igual pero esta simplificado
    // on(load, (state, { products }) => {
    //     return {
    //         products: [... products]
    //     }
    // }),
    //opera igual pero esta simplificado
    on(load, (state) => ({ products: [... state.products]})),
    on(findAll, (state, { products }) => ({ products: [... products]})),

)