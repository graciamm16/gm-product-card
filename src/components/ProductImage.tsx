import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props{
    img?: string,
    className?:string,
    style?: CSSProperties
}

export const ProductImage = ({img, className, style}:Props) => {

    const {product} = useContext(ProductContext);//Extraer el producto del contexto
    let imgToShow: string;

    if(img){
        imgToShow = img;

    }else if (product.img){
        imgToShow = product.img;

    }else{
        imgToShow = noImage

    }

    return (
        <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt="Product"/>
    )
}