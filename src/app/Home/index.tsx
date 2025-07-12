import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Picker } from '@react-native-picker/picker'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import ProductItem from '../../components/ProductItem'
import { useCategories } from '../../hooks/useCategories'
import { useProducts } from '../../hooks/useProducts'
import { StackRoutesProps } from '../../routes/StackRoutes'
import { Product } from '../../types/product'
import { styles } from './styles'

export function Home({ navigation }: StackRoutesProps<'home'>) {
  const [sortBy, setSortBy] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState()
  const { categories, isLoadingCategory, errorCategory } = useCategories()
  const { products, isLoadingProducts, errorProducts, loadMore } = useProducts(selectedCategory)
  const [displayProducts, setDisplayProducts] = useState<Product[]>([])

  useEffect(() => {
    if (!sortBy) {
      setDisplayProducts(products)
    }

    if (sortBy) {
      const sorted = [...products].sort((a, b) => 
        sortBy === 'price' ? a.price - b.price : b.rating - a.rating
      )
      setDisplayProducts(sorted)
    } else {
      setDisplayProducts(products)
    }
  
  }, [sortBy, products])
  
  return (
    <View style={styles.container}>
      <Text style={styles.filterText}>Filter by Category:</Text>
      
      {errorCategory ? (
        <Text style={styles.emptyList}>{errorCategory}</Text>
        ) : isLoadingCategory ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <View>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Filter by category" />
              {categories.map((category) => (
                <Picker.Item key={category.slug} label={category.name} value={category.slug} />
              ))}
            </Picker>
          </View>
      )}

      <View style={styles.buttonContainer}>
        <Text style={styles.filterText}>Sort by:</Text>
        <TouchableOpacity style={styles.button} onPress={() => setSortBy('price')}>
          <Text style={styles.title}>Price</Text>
          <MaterialCommunityIcons name="swap-vertical" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSortBy('rating')}>
          <Text style={styles.title}>Rating</Text>
          <MaterialCommunityIcons name="swap-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {errorProducts && <Text style={styles.emptyList}>{errorProducts}</Text>}
      {isLoadingProducts && <ActivityIndicator size="large" color="#000" />}

      <FlatList
        data={displayProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => navigation.navigate('product', { id: item.id })}
          />
        )}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.emptyList}>Nothing to show</Text>}
        onEndReached={loadMore}
      />
    </View>
  )
}
