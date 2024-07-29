"use client";

import { getArrayFromLocalStorage } from "@/libs/helpers/localStorageHelper";
import { createContext, useContext, useEffect, useState } from "react";

interface ProductContextInterface {
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}
const ProductContext = createContext<ProductContextInterface>({
  cartProducts: [] as CartProduct[],
  setCartProducts: () => {},
});

export default function ProductContextProvider({
  children,
}: {
  children: any;
}) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(
    [] as CartProduct[]
  );

  useEffect(() => {
    if (localStorage.getItem("products-cart")) {
      setCartProducts(getArrayFromLocalStorage("products-cart"));
    } else {
      setCartProducts([] as CartProduct[]);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
