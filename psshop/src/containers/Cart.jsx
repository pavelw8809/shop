import { React } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cart = useSelector((state) => state.cart);

    if (cart.length > 0) {
        cart.map((item, i) => {
            return(
                <p>{item.name}</p>
            )
        })
    }
}

export default Cart;