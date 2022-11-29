import type { Product } from "../pages/products"
import { products } from "../pages/products";
const SESSION_KEY = "CARTED_PRODUCTS"

type DispatchType = "ADD" | "REMOVE";
type CartedProducts = Record<Product["id"], Product & {
    amount: number
}>;
type CartedProduct = CartedProducts[Product["id"]]

export const cart = {
    removeProducts(id: Product["id"], amount = 1) {
        const cartedProducts = this.products;
        let productForId = cartedProducts[id];

        if(!productForId) return;
        productForId.amount -= amount;

        if(productForId.amount <= 0) {
            delete cartedProducts[id]
        }

        this.products = cartedProducts;
        this.dispatch("REMOVE")
    },
    addProduct(id: Product["id"], amount = 1) {
        const cartedProducts = this.products;
        let productForId = cartedProducts[id];

        if (productForId) {
            productForId.amount += amount;
        } else {
            // get product 
            let product = products.find(({ id: pid }) => pid == id);
            if (!product) return;

            cartedProducts[id] = {
                amount,
                ...product
            }
        }

        this.products = cartedProducts;
        this.dispatch("ADD")
    },

    set products(cartedProducts: CartedProducts) {
        window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(cartedProducts))
    },

    get products() {
        const fromStorage = window.sessionStorage.getItem(SESSION_KEY)
        if (!fromStorage) return {};

        const products = JSON.parse(fromStorage) as CartedProducts;

        return products;
    },
    subscribe(subscriber: (type: DispatchType, products: CartedProducts) => void) {
        return this.subscribers.push(subscriber)
    },

    dispatch(type: DispatchType) {
        for (let subscriber of this.subscribers) {
            subscriber(type, this.products);
        }
    },

    subscribers: [] as any[]
}