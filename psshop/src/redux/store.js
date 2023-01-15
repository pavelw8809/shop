import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartStore';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { loadState } from './localStorage';

// 1. Initial state

/*
const defaultState = {
    cart: [],
    total: 0
};
*/

// 2. Actions
/*
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store);
*/

const persistedState = loadState();
//const persistedCart = persistedState.cart;

export default configureStore({
    reducer: {
        cart: cartReducer,
    }, 
    preloadedState: persistedState
})



/*

const CART_ACTION_TYPES = {
    ADD: "ADD",
    UPDATE: "UPDATE",
    DELETE: "DELETE"
};

const addItem = (item) => ({
    type: CART_ACTION_TYPES.ADD,
    payload: {item}
});

const remItem = (id) => ({
    type: CART_ACTION_TYPES.DELETE,
    payload: id
});

const updItem = (item) => ({
    type: CART_ACTION_TYPES.UPDATE,
    payload: item
});

// 3. Reducer

const reducer = (state = defaultState, action) => {
    console.log(action.type);
    switch (action.type) {
        case CART_ACTION_TYPES.ADD:
            console.log("ADD");
            //console.log(state);
            let itemExists = false;
            const getItem = state.cart.map((item, i) => {
                console.log(item);
                if (item.id === action.payload.id) {
                    itemExists = true;
                    let sum = item.q + action.payload.q;
                    console.log(sum);
                    return {
                        ...state, cart: {
                            ...state.cart, [i]: {
                                ...state.cart[i].q = sum
                            }
                        }
                    }
                }
            })
            if (!itemExists) {
                return {...state, cart: [...state.cart, action.payload], total: state.total+action.payload.q};
            }
            //console.log(state);
        case CART_ACTION_TYPES.DELETE:
            const filteredObj = state.cart.filter(({id}) => id !== action.payload)
            return {...state, cart: filteredObj};
        case CART_ACTION_TYPES.UPDATE:

            let newState = { ...state };
            const items = newState.cart.map((item, i) => {

                console.log(action.payload);
                //console.log(...state, cart: {...state.cart, [key]: {...state.cart[key].q})
                if (item.id === action.payload.id) {
                 //   console.log(action.payload.q);
                    return {
                        ...state, cart: {
                            ...state.cart,
                            [i]: {
                                ...state.cart[i] = action.payload
                            }
                        }
                        //...item, q: action.payload.q, price: 3.00
                        //state.cart[i].q = 
                    }
                }
            })
            //console.log(newState);
            return state;
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log(store.getState())
*/

// 4. Dispatchers
/*
store.dispatch({
    type: "ADD",
    payload: {name: 'STABILO Highlighter', price: '9.40', option: 'pink', id: 110, q: 2}
})

store.dispatch({
    type: "DELETE",
    payload: 110
})

console.log(store.getState())
*/

