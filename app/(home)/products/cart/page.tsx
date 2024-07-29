"use client";

import CartProductCard from "@/components/products/cart/CartproductCard";
import { useProductContext } from "@/components/products/ProductContext";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function ShoppingCart() {
  const { cartProducts } = useProductContext();
  return (
    <section className="px-3">
      <div className="flex gap-2 max-w-[1500px] mx-auto">
        <div className="flex-1">
          <PageHero pageHeroTitle="Cart" />
        </div>
        <CheckoutButton cartProducts={cartProducts} />
      </div>
      <div className="my-8 max-w-[1500px] mx-auto grid grid-cols-6 gap-3 min-h-[70vh]">
        {cartProducts.length === 0 && (
          <div className="col-span-6 flex items-center justify-center">
            <span className="text-2xl">Your cart is empty</span>
          </div>
        )}
        {cartProducts.map((product, i) => (
          <CartProductCard key={product.name} {...product} index={i} />
        ))}
      </div>
    </section>
  );
}

function CheckoutButton({ cartProducts }: { cartProducts: CartProduct[] }) {
  function generateCheckoutMessageForWhatsapp() {
    const message = "I'm interested in the following products\n";
    const products = cartProducts.map((product) => {
      return `${product.name} - ${product.quantity}`;
    });
    return encodeURI(message + products.join("\n"));
  }
  return (
    <>
      <Link
        href={`https://wa.me/+919446422294?text=${generateCheckoutMessageForWhatsapp()}`}
        onClick={() => localStorage.removeItem("products-cart")}
        target="_blank"
        className="flex items-center justify-center p-6 my-3 bg-white rounded-xl  border border-green-500 cursor-pointer overflow-hidden relative group flex-col"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 bg-green-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="font-bold text-2xl md:text-4xl lg:text-5xl relative text-green-500 transition duration-300 group-hover:text-white ease">
          <AiOutlineWhatsApp strokeWidth={1} />
        </span>
        <span className="text-xs transition duration-300 text-green-500 group-hover:text-white z-10">
          checkout
        </span>
      </Link>
    </>
  );
}
