import React, { useState } from 'react'
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { onChangeArgs } from '../interfaces/interfaces'

// CSS Custom Styles
import '../styles/custom-styles.css'

// Listado de productos desde un fichero
import { products } from '../data/products';
const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
             
        </div>
    )
}
