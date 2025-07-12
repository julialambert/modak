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
    alignItems: 'center'
  },
  productTitle: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  productDetailsTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDetails: {
    fontSize: 16,
    marginBottom: 8
  }
})