import { Product } from '../types/product'

type ApiProduct = {
  id: number
  title: string
  price: number
  description: string
  brand: string
  stock: number
  thumbnail: string
  rating: number
}

export function mapProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    price: apiProduct.price,
    description: apiProduct.description,
    brand: apiProduct.brand,
    stock: apiProduct.stock,
    thumbnail: apiProduct.thumbnail,
    rating: apiProduct.rating,
  }
}
