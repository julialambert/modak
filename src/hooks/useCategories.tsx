import { useEffect, useState } from 'react'
import { apiClient } from '../services/api'
import { Category } from '../types/category'

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)
  const [errorCategory, setErrorCategory] = useState('')

  useEffect(() => {
    setIsLoadingCategory(true)
    setErrorCategory('')
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get('/products/categories')
        setCategories(response.data)
      } catch (error) {
        setErrorCategory('Failed to load categories')
      } finally {
        setIsLoadingCategory(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, isLoadingCategory, errorCategory }
}
