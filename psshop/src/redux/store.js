import createTypography from '@mui/material/styles/createTypography';
import { legacy_createStore as createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import cartReducer from './cartStore';

// 1. Initial state

/*
const defaultState = {
    cart: [],
    total: 0
};
*/

// 2. Actions

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
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

