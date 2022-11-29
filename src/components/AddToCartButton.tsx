import "solid-js"
import { cart } from "../js/cart"
import type { Product } from "../pages/products"

export default function AddToCartButton({ productId }: { productId: Product["id"] }) {

    return <button onClick={() => cart.addProduct(productId)}>Add To cart</button>
}