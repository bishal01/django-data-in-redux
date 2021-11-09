import {addtocart} from "./types"
import  {dec,inc } from './types'


export const add_cart=(cart)=>({
    type:addtocart,


})





export const increment=()=>({
type:inc

})

export const decrement=()=>({

    type:dec
})