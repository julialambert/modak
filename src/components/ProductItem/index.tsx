import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../../types/product'
import { styles } from './styles'

interface ProductItemProps {
  product: Product
  onPress: () => void
}

export default function ProductItem({ product, onPress }: ProductItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.productContainer}>
          <Image source={{ uri: product.thumbnail }} style={{ width: 100, height: 100 }} />
          <View>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.productPrice}>Rating: {product.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
