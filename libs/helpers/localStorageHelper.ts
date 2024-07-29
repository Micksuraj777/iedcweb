export function setArrayIntoLocalStorage(key : string = "products-cart", value : CartProduct[]) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getArrayFromLocalStorage(key : string = "products-cart") : CartProduct[] {
    return JSON.parse(localStorage.getItem(key) || "[]");
}