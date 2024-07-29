import ProductContextProvider from "@/components/products/ProductContext";

export default function ProductLayout({ children }: { children: any }) {
  return <ProductContextProvider>{children}</ProductContextProvider>;
}
