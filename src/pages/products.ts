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
    sale?: number; // percent 0 - 100

    images: string[]
}

export const products: Product[] = [
    {
        id: 0,
        category_id: 0,
        name: "A5 notebook",
        description: `Pork chop turducken tail, pork loin porchetta beef tenderloin boudin chicken leberkas ball tip flank meatloaf. Bacon meatloaf pork filet mignon meatball short loin sirloin ball tip sausage porchetta ham hock turkey.`,
        price: 3.5,
        images: ["/img/notebook-2.webp", "/img/notebook-1.webp"]
    },
    {
        id: 1,
        category_id: 0,
        name: "Sketchbook",
        description: `Pork chop turducken tail, pork loin porchetta beef tenderloin boudin chicken leberkas ball tip flank meatloaf. Bacon meatloaf pork filet mignon meatball short loin sirloin ball tip sausage porchetta ham hock turkey.`,
        price: 4.8,
        sale: 10,
        images: ["/img/sketchbook-1.webp", "/img/sketchbook-2.webp"]
    },
    {
        id: 2,
        category_id: 0,
        name: "A6 noteobook",
        description: `Pork chop turducken tail, pork loin porchetta beef tenderloin boudin chicken leberkas ball tip flank meatloaf. Bacon meatloaf pork filet mignon meatball short loin sirloin ball tip sausage porchetta ham hock turkey.`,
        price: 3,
        images: ["/img/sketchbook-3.webp", "/img/sketchbook-4.webp"]
    },
    {
        id: 3,
        category_id: 0,
        name: "Sketchbook",
        description: `Pork chop turducken tail, pork loin porchetta beef tenderloin boudin chicken leberkas ball tip flank meatloaf. Bacon meatloaf pork filet mignon meatball short loin sirloin ball tip sausage porchetta ham hock turkey.`,
        price: 5,
        sale: 15,
        images: ["/img/sketchbook-3.webp", "/img/sketchbook-4.webp"]
    }
]

export const get: APIRoute = async ({ }) => {
    return {
        body: JSON.stringify(products)
    }
}