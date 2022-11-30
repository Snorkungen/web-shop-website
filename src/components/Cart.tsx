import "solid-js";
import { cart } from "../js/cart";


export default function Cart() {
    const cartedProducts = cart.products;


    return <div style={{
        display: "flex",
        "flex-wrap": "wrap",
        gap: "3em"
    }}>
        {Object.values(cartedProducts).map(({ name, images, amount }) =>
            <div>
                <h1>{name}</h1>
                <img src={images[0]} width="120" />
                <input type="number" value={amount} />
            </div>
        )}
    </div>
}