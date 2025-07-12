import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Home } from '../app/Home'
import ProductDetails from '../app/ProductDetails'

export type StackRoutesList = {
  home: undefined
  product: undefined | { id: number }
}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen 
        name="home" 
        component={Home} 
        options={{ title: 'Products List' }}
      />
      <Stack.Screen 
        name="product" 
        component={ProductDetails}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  )
}
