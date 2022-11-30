import "solid-js"
import { createSignal } from "solid-js"
import { cart } from "../js/cart"
import type { Product } from "../pages/products"
import toast, { Toaster } from "solid-toast"


export default function CartFooter() {

    cart.subscribe((type) => {
        switch (type) {
            case "ADD":
                toast.success("Product added to cart.")
                break
            case "REMOVE": 
                toast("Product removed from cart")
        }
    })


    return <footer>
        <Toaster />
    </footer>
}