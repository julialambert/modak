import { useEffect, useState } from 'react'
import { mapProduct } from '../mappers/productMapper'
import { apiClient } from '../services/api'
import { Product } from '../types/product'

export function useProductById(id: number) {
  const [product, setProduct] = useState<Product | undefined>()
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [errorProducts, setErrorProducts] = useState('')

  useEffect(() => {
    setIsLoadingProducts(true)
    setErrorProducts('')

    const fetchProduct = async () => {
      try {
        const response = await apiClient.get(`/products/${id}`)
        const mappedProduct = mapProduct(response.data)
        setProduct(mappedProduct)
      } catch {
        setErrorProducts('Product not found')
      } finally {
        setIsLoadingProducts(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  return { product, isLoadingProducts, errorProducts }
}
