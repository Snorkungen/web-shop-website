import type { APIRoute } from "astro";

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    category_id: Category["id"];

    name: string;
    description: string;

    price: number;
    sale: number; // percent 0 - 100

    images: {
        src: string;
        default?: true;
    }[]
}

export const products: Product[] = []

export const get: APIRoute = async ({ }) => {
    return {
        body: JSON.stringify(products)
    }
}