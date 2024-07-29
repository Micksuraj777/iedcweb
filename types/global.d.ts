type ProductItems = {
    name: string;
    image: string;
    price: string;
}
type Products = {
    type: string;
    items: ProductItems[]
}
type CartProduct = {
    type: string;
    name: string;
    image : string;
    quantity: number;
}