import ProductCard from "@/components/products/ProductCard";
import PageHero from "@/components/shared/PageHero";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
import { CiShoppingCart } from "react-icons/ci";

export default async function ProductsPage() {
  const filePath = path.join(process.cwd(), "public", "/json/products.json");
  const products: Products[] = (
    await fs.readFile(filePath, "utf8").then((data) => JSON.parse(data))
  ).products as Products[];

  return (
    <section className="px-3">
      <div className="flex gap-2 max-w-[1500px] mx-auto">
        <div className="flex-1">
          <PageHero pageHeroTitle="Products" />
        </div>
        <ShoppingCartButton />
      </div>
      <div className="my-8 max-w-[1500px] mx-auto">
        {products.map(({ items, type }) => (
          <div key={type} className="mt-8">
            <h2 className="text-2xl capitalize text-green-500 font-semibold">
              {type}
            </h2>
            <div className="mt-3 gap-8 grid grid-cols-12">
              {items.map((item) => (
                <ProductCard key={item.name} {...item} {...{ type }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShoppingCartButton() {
  return (
    <>
      <Link
        href="products/cart"
        className="flex items-center justify-center p-6 my-3 bg-white rounded-xl  border border-green-500 cursor-pointer overflow-hidden relative group flex-col"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 bg-green-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="font-bold text-2xl md:text-4xl lg:text-5xl relative text-green-500 transition duration-300 group-hover:text-white ease">
          <CiShoppingCart strokeWidth={1} />
        </span>
        <span className="text-xs transition duration-300 text-green-500 group-hover:text-white z-10">
          cart
        </span>
      </Link>
    </>
  );
}
