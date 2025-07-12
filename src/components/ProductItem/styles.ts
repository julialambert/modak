import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderRadius: 8,
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  productTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
  }
})