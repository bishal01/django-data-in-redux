import { combineReducers,createStore ,applyMiddleware,compose} from 'redux'
import cart_reducer from './reducer/cart_reducer'
import jsonreducer from './reducer/jsonreducer'
import thunk from 'redux-thunk'
import countReducer from './reducer/count'



const combined=combineReducers({
cart_reducer,
countReducer,
jsonreducer

}

)
const store=createStore(combined,compose(

applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)    
    )

export default store;

