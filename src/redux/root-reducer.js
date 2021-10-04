import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //user is stored with auth; 'cart' is the reducer we want to save!
};

const rootReducer = combineReducers({
    user:   userReducer,
    cart:   cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);