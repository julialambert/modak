import { useEffect, useState } from 'react'
import { apiClient } from '../services/api'
import { Product } from '../types/product'

export function useProducts(selectedCategory?: string) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [errorProducts, setErrorProducts] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const LIMIT = 30
  
  useEffect(() => {
    setProducts([])
    setPage(0)
    setHasMore(true)
  }, [selectedCategory])
  
  useEffect(() => {
    if (!hasMore) return

    if(selectedCategory) {
      const fetchProductByCategory = async () => {
        setIsLoadingProducts(true)
        setErrorProducts('')

        try {
          const response = await apiClient.get(`/products/category/${selectedCategory}`)
          setProducts(response.data.products)
        } catch {
          setErrorProducts('Failed to load products')
        } finally {
          setIsLoadingProducts(false)
        }
      }
      
      fetchProductByCategory()
    } else {
      const fetchProducts = async () => {
        setIsLoadingProducts(true)
        setErrorProducts('')

        try {
          const response = await apiClient.get(`/products?limit=${LIMIT}&skip=${page * LIMIT}`)
          const newProducts =  response.data.products

          if (newProducts.length < LIMIT) {
            setHasMore(false)
          }

          setProducts(prev => [...prev, ...newProducts])
        } catch {
          setErrorProducts('Failed to load products')
        } finally {
          setIsLoadingProducts(false)
        }
      }

      fetchProducts()
    }

  }, [page, selectedCategory])

  const loadMore = () => {
    if (!isLoadingProducts && hasMore && !selectedCategory) {
      setPage(prev => prev + 1)
    }
  }

  return { products, isLoadingProducts, errorProducts, loadMore }
}
