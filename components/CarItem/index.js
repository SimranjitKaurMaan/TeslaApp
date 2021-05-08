import React from 'react'
import { View, Text , ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {
     const {title, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
        <StyledButton type='primary' content='custom order' onPress={()=>{ console.warn(' custom order pressed')}}/>
        <StyledButton type='secondary' content='existing inventory' onPress={()=>{console.warn('existing inventory pressed')}}/>
        </View>
      </View>
    )
}

export default CarItem;
