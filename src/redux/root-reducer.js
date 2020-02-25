//  contains the object with mutiple reducers as a key whose value is defined in the defined reduers
import { combineReducers } from "redux";
import  { persistReducer } from "redux-persist" ;
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/user-reducer";
import CartReducer from "./cart/cart-reducers" ;
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducers";


const persistConfig ={
   key : "root",
   storage,
   whitelist:['cart']
}
const rootReducer = combineReducers({
   user: UserReducer,
   cart : CartReducer,
   directory : directoryReducer , 
   shop : shopReducer
});

export default persistReducer(persistConfig , rootReducer);
