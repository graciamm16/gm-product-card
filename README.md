# GM-Product-Card

Esto es un paquete de pruebas de despliegue en NPM

###Gracia Martin

##Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from gm-product-card
```

```
 <ProductCard
        product={product}
        initialValues={{
            count: 4,
            maxCount: 10
        }}
        >
            {
                ({reset, count, increaseBy, isMaxCountReached, maxCount})=>(

                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                        
                    </>
                )
            }
           
        </ProductCard>
```