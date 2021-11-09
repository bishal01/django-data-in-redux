import { inc,dec } from "../action/types";

const countReducer=(state=0,action)=>{
    switch (action.type) {
        case inc:
            return state+1
            
            break;
    
        case dec:
           return state-1

           break;
           
        default:
            return state   
    }
}
export default countReducer