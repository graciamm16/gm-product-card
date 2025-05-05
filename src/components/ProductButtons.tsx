import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string,
    style?: React.CSSProperties
    maxCount?: number
}

export const ProductButtons = ({className, style} : Props) => {

    //TODO: Extraer una propiedad maxCount
    const {increaseBy, counter, maxCount} = useContext(ProductContext);
    console.log('ProductButtons', maxCount);

    //TODO: isMaxReached (useCallback), [counter, maxCount] estos cambien
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount, 
        [counter, maxCount]
    );
    
    // return TRUE si el count === maxCount
    // FALSE si no lo es
    
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(+1)}>+</button>
        </div>
    );
}
