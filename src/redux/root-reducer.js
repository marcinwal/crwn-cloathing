import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //user is stored with auth; 'cart' is the reducer we want to save!
};

const rootReducer = combineReducers({
    user:   userReducer,
    cart:   cartReducer
});

export default persistReducer(persistConfig, rootReducer);