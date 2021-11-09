import { getpost } from "../action/types";
const initstate={
  leads:[]
}

const jsonreducer=(state=initstate,action)=>{
switch (action.type) {
case getpost :
  return {
    ...state,
    leads:action.payload
  }
  

 

default:
        return state;
}

}

export default jsonreducer