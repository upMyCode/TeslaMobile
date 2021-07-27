import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: "absolute",
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      top: 50,
      zIndex: 100
    },
    logo: {
      width: 100,
      height: 20,
      resizeMode: "contain"
    },
    menu: {
      width: 25,
      height: 25
    }
})

export default styles