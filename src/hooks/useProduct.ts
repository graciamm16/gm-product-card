import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    console.log(isMounted.current)
    console.log(initialValues?.count);
    console.log(initialValues?.maxCount)

    const increaseBy = (value: number) => { 

        let newValue = Math.max(0, counter + value);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter( newValue );

        onChange && onChange({count: newValue, product}); // Ejecutar si onChange viene
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    // Se recomienda que los useEffect esten asignados a una tarea específica
    // useEffect(() => {
    //     isMounted.current = true; // Cuando el componente sea utilizado, marcamos el isMounted como true
    // }, [])

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value])

    return {
        counter,
        
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,

        increaseBy,
        reset,
    }
}