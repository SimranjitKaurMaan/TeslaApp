import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: Dimensions.get('window').height

     },
     titles:{
        marginTop: '30%',
        alignItems: 'center'
     },
     title:{
        fontSize: 40,
        fontWeight: '600',
     },
     subtitle:{
      fontSize: 16,
      color: '#5c5e62'
     },
     subtitleCTA:{
      fontSize: 16,
      color: '#5c5e62',
      textDecorationLine: 'underline'
     },
     image:{
       width: '100%',
       height: Dimensions.get('window').height,
       resizeMode: 'cover',
       position: 'absolute'
     },
   buttonContainer:{
      bottom: 50,
      position: 'absolute',
      width: '100%'
   }
})

export default styles;