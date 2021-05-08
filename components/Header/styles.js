import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:
  {
    top: 50,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%'
  },
  logo:
  {
    height: 20,
    width: 100,
    resizeMode: 'contain'
  },
  menu:
  {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
})

export default styles;
