"use client";
import Image from "next/image";
import { useProductContext } from "../ProductContext";
import { useEffect, useState } from "react";
import { setArrayIntoLocalStorage } from "@/libs/helpers/localStorageHelper";

export default function CartProductCard(
  props: CartProduct & { index: number }
) {
  return (
    <div className="p-3 rounded-xl border col-span-6 flex lg:col-span-3 flex-wrap gap-3">
      <div className="w-full relative h-[250px] min-h-[100px] aspect-square rounded-lg overflow-clip md:w-[unset]">
        <Image
          fill
          src={props.image}
          alt={props.name}
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-3 min-w-[250px]">
        <h4 className="font-semibold text-2xl">{props.name}</h4>
        <QuantityModifier quantity={props.quantity} index={props.index} />
      </div>
    </div>
  );
}


function QuantityModifier({
    quantity,
    index,
  }: {
    quantity: number;
    index: number;
  }) {
    const { cartProducts, setCartProducts } = useProductContext();
    const [qty, setQty] = useState(0);
  
    function subtractQty(q: number) {
      q--;
      if (q > 0) changeQtyBasedOnIndex(q.toString());
    }
  
    function addQty(q: number) {
      q++;
      changeQtyBasedOnIndex(q.toString());
    }
  
    function changeQtyBasedOnIndex(number: string) {
      setQty(Number(number));
      const newCartProducts = [...cartProducts];
      newCartProducts[index].quantity = Number(number);
      setCartProducts(newCartProducts);
      setArrayIntoLocalStorage("products-cart", newCartProducts);
    }
  
    useEffect(() => {
      setQty(quantity);
    }, []);
  
    return (
      <div className="flex gap-1">
        <button
          className="bg-green-500 text-xl font-semibold rounded-xl h-12 aspect-square text-center text-white cursor-pointer"
          onClick={() => subtractQty(qty)}
        >
          -
        </button>
        <input
          type="text"
          value={qty}
          onChange={(e) => changeQtyBasedOnIndex(e.target.value)}
          className="border rounded-xl text-black p-2 max-w-[100px] text-center"
        />
        <button
          className="bg-green-500 text-xl font-semibold rounded-xl h-12 aspect-square text-center text-white cursor-pointer"
          onClick={() => addQty(qty)}
        >
          +
        </button>
      </div>
    );
  }