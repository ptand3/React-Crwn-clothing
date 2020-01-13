//  contains the object with mutiple reducers as a key whose value is defined in the defined reduers
import { combineReducers } from "redux";
import UserReducer from "./user/user-reducer";
import CartReducer from "./cart/cart-reducers" ;


export default combineReducers({
   user: UserReducer,
   cart : CartReducer
});
