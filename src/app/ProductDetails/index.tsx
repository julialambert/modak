import { useRoute } from '@react-navigation/native'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { useProductById } from '../../hooks/useProductById'
import { Product } from '../../types/product'
import { styles } from './styles'

export default function ProductDetails() {
  const route = useRoute()
  const { id } = route.params as Product
  const { product, isLoadingProducts, errorProducts } = useProductById(id)

  if (isLoadingProducts) return <ActivityIndicator />
  if (!product) return <Text>{errorProducts}</Text>

  return (
    <View style={{ padding: 16 }}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image 
        source={{ uri: product.thumbnail }} 
        style={{ width: 'auto', height: 300, marginBottom: 16 }}
        resizeMode="contain"
      />
      <Text style={styles.productDetails}>
        <Text style={styles.productDetailsTitle}>Price: </Text>
        {product.price ? `$${product.price}` : '-'}
      </Text>
      <Text style={styles.productDetails}>
        <Text style={styles.productDetailsTitle}>Brand: </Text>
         {product.brand ? product.brand : '-'}
      </Text>
      <Text style={styles.productDetails}>
        <Text style={styles.productDetailsTitle}>Stock: </Text>
        {product.stock ? `${product.stock} items` : '-'}
      </Text>
      <Text style={styles.productDetails}>
        <Text style={styles.productDetailsTitle}>Description: </Text>
        {product.description ? product.description : '-'}
      </Text>
    </View>
  )
}
