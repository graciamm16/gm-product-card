
import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';


describe('ProductCard', () => {

    test('debe de mostrar el componente correctamente ', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
            {   
                ()=>(
                    <h1>Product Card</h1>
                )

            }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test('debe de incrementar el contador', () => {


        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1')



    })

    
    
  
})
