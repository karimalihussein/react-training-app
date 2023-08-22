import React, { useEffect, useState } from 'react'

export const ProductList = () => {
   const [products, setProducts] = useState<string[]>([]);
   useEffect(() => {
     console.log('fetching products');
     setProducts(['product1', 'product2']);
   }, [])
  return (
    <div>ProductList</div>
  )
}
