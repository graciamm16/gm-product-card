import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    // Manejar el cart como un objeto, dentro tenemos x cantidad de llaves que son strings y los valores de ese objeto son de tipo Product in cart
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

    const onProductCountChange = ({count, product}:onChangeArgs) => {
        
        // El count es un +1, o, -1
        setShoppingCart(oldShoppingCart => {

            if(count === 0){
                const { [product.id]: toDelete, ...rest} = oldShoppingCart
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
