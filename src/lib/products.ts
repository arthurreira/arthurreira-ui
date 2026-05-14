import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  brand: z.string(),
  stock: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;

const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Everyday Backpack",
    price: 89,
    description: "Durable carry-all backpack with organized interior storage.",
    category: "Bags",
    brand: "Registry",
    stock: 24,
  },
  {
    id: 2,
    name: "Canvas Tote",
    price: 34,
    description: "Lightweight tote for errands, work, and weekend plans.",
    category: "Bags",
    brand: "Registry",
    stock: 38,
  },
  {
    id: 3,
    name: "Desk Lamp",
    price: 59,
    description: "Adjustable lamp with warm, focused light for workspaces.",
    category: "Home",
    brand: "Registry",
    stock: 16,
  },
  {
    id: 4,
    name: "Ceramic Mug",
    price: 22,
    description: "Minimal ceramic mug with a comfortable matte finish.",
    category: "Home",
    brand: "Registry",
    stock: 52,
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://api.vercel.app/products", {
      signal: AbortSignal.timeout(2000),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return z.array(ProductSchema).parse(data);
  } catch (error) {
    return fallbackProducts;
  }
}

export async function getCategories(): Promise<string[]> {
  const products = await getProducts();
  return Array.from(new Set(products.map((product) => product.category)));
}
