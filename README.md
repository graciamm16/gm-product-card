# JB-Product-Card
Este es un paquete de pruebas de despliegue en NPM

### Jordi Beltran

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jb-product-card'
```

```
<ProductCard 
  product={product}
  key={product.id}

  // Patrón StateInitializer
  initialValues={{
      count: 4,
      maxCount: 10
  }}
>
  {
      ({reset, count, increaseBy, isMaxCountReached, maxCount}) => (
        <>
          <ProductCard.Image/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>

          {/* <button onClick={reset}>Reset</button> */}
          {/* <button onClick={()=>increaseBy(-2)}>-2</button> */}
          {/* Si no se llega al isMaxCount, ocultar */}
          {/* {!isMaxCountReached && <button onClick={()=>increaseBy(+2)} >+2</button>} */}
          
          
          {/* <span>{count} - {maxCount}</span> */}
        </>
      )
  }
</ProductCard>
```