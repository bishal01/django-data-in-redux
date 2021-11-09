import {addtocart} from '../action/types'
const initstate=[]

const cart_reducer=(state=initstate,action)=>
{

switch (action.type) {
    case addtocart :

     return [
        ...state,action.payload
     ];
  default:
        return state
}

}

export default cart_reducer;