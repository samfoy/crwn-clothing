import { createContext, FC, useEffect, useState } from 'react';
import PRODUCTS from '../shop.data';

export const ProductsContext = createContext<ProductsContextType>({
  products: []
});

export const ProductsProvider: FC = ({ children }) => {
  const [ products, setProducts ] = useState<Products>(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

type Products = typeof PRODUCTS;

type ProductsContextType = {
  products: Products;
  setProducts?: (products: Products) => void;
};
