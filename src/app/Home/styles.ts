import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  filterText: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
  dropDownContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
    gap: 8,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    color: "#000000",
    fontSize: 14,
    fontWeight: 600,
  },
  emptyList: {
    fontSize: 16,
    fontWeight: 800,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16
  }
})