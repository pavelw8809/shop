import { createSlice } from '@reduxjs/toolkit';

export const cartReducer = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload);
            
            let itemExists = false;
            const getItem = state.map((item, i) => {
                console.log(item);
                if (item.id === action.payload.id) {
                    itemExists = true;
                    let sum = item.q + action.payload.q;
                    console.log(sum);
                    return state[i].q = sum;
                }
            })
            if (!itemExists) {
                return [...state, action.payload];
            }            
        },
        remove: (state, action) => {
            const filteredObj = state.filter(({id}) => id !== action.payload)
            return {...state, filteredObj};
        }
    }
});

export const { addItem, remove } = cartReducer.actions;
export default cartReducer.reducer;