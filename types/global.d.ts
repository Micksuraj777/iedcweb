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
type EventItems ={
    image: string;
    alt: string;
    title: string;
    des:string;
}

type Events = {
    type: string;
    items:EventItems[]
}