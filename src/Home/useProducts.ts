import React from 'react'
import { Category } from "../shared/types"
import { getProducts } from '../api'

export const useProducts = (apiGetProducts = getProducts) => {
  const [categories, setCategories] = React.useState<Category[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiGetProducts()
        setCategories(data.categories || [])
      } catch (error: any) {
        setError(error)
      }
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  return { categories, isLoading, error }
}
