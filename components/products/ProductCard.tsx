"use client";
import Image from "next/image";
import { useProductContext } from "./ProductContext";
import Link from "next/link";
import { setArrayIntoLocalStorage } from "@/libs/helpers/localStorageHelper";

export default function ProductCard(props: ProductItems & { type: string }) {
  const { cartProducts, setCartProducts } = useProductContext();

  function generateCheckoutMessageForWhatsapp() {
    const message = "I'm interested in the following product\n";
    const product = `${props.name} - ${1}`;
    return encodeURI(message + product);
  }

  function addProductsToCart() {
    const productIndex = cartProducts.findIndex(
      (product) => product.name === props.name && product.type === props.type
    );
    if (productIndex === -1) {
      setCartProducts([
        ...cartProducts,
        { type: props.type, name: props.name, image: props.image, quantity: 1 },
      ]);
    } else {
      const newCartProducts = [...cartProducts];
      setArrayIntoLocalStorage("products-cart", newCartProducts); 
      newCartProducts[productIndex].quantity += 1;
      setCartProducts(newCartProducts);
    }
  }
  return (
    <div className="p-3 rounded-xl border flex flex-col gap-3 min-w-[250px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div className="relative w-full h-[250px] aspect-square rounded-lg overflow-clip">
        <Image
          fill
          src={props.image}
          alt={props.name}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-semibold">{props.name}</h4>
          {/* <p>{props.price}</p> */}
        </div>
        <div className="flex gap-3">
          <button
            onClick={addProductsToCart}
            className="bg-yellow-500 text-white px-3 py-1 rounded-md flex-1"
          >
            Add to Cart
          </button>
          <Link
            href={`https://wa.me/+919446422294?text=${generateCheckoutMessageForWhatsapp()}`}
            className="bg-green-500 text-white px-3 py-1 rounded-md flex-1 text-center"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
