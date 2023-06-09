import { StyleSheet, Text, Pressable, Dimensions, Platform, PixelRatio} from 'react-native'
import React from 'react'

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 428;

export function normalize(size) {
  const newSize = size * scale 
  console.log(scale) 
  console.log(newSize) 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const Category = ({value, answerCount, panelAmountCall, modalOpenRef}) => {

  const handleClick = () => {
    panelAmountCall(value)
    console.log(`Just clicked on category, value should be ${value}`)
    modalOpenRef.current?.present();
  }

  return (
    <Pressable style={answerCount>=5 ? styles.inactive : styles.active} onPress={()=> handleClick()}>
      <Text style={answerCount>=5 ? styles.inactiveText : styles.activeText} >$ {value}</Text>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#6A41FF',
        borderRadius: 15,
        marginHorizontal: '5%',
        marginVertical: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      },
    inactive : {
      backgroundColor: '#5a5d70',
      borderRadius: 15,
      marginHorizontal: '5%',
      marginVertical: '2%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60
    },
    activeText: {
      color: 'white',
      fontSize: normalize(34),
      fontWeight: 700,
      shadowOffset : {width: 3, height: 3},
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 0
    },
    inactiveText: {
      color: '#aeb1c2',
      fontSize: normalize(34),
      fontWeight: 700,
      shadowOffset : {width: 3, height: 3},
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 0
    }
})