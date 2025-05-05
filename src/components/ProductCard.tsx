
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import React, { createContext, CSSProperties, JSX } from 'react';
import { InitialValues, onChangeArg, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';




export const ProductContext = createContext({} as  ProductContextProps);//Creación de un contexto con las propiedades establecidades en ProductContextProps
const {Provider} = ProductContext


export interface Props {
    product: Product;
    // children?:ReactElement | ReactElement[]; //Establecer que el componente ProductCard pueda tener componenetes hijo 
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArg) => void;
    value?: number;
    initialValues?: InitialValues;
}

//Definimos un componente funcional ProductCard que recibe product como una prop.
//Obligamos al componente que simepre le tiene que enviar un producto 
export const ProductCard = ({children, product, className, style, value, onChange, initialValues}:Props) => { 

 const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues});//Hook con la lógica de useState para incrementar y decrementar


  return (
   
        <Provider value={{ // Porveedor para los componenegtes hijos de ProductCard
            counter,
            increaseBy,
            maxCount,
            product,
            

        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    
                    increaseBy,
                    reset,
                })}
            
                {/* <ProductImage img={product.img}/>

                <ProductTitle title={product.title}/>

                <ProductButtons counter={counter} increaseBy={increaseBy}/> */}

        
        

        
            </div>
        </Provider>
  )
}

