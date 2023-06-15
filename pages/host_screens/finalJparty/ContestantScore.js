import { StyleSheet, Text, View, Pressable, Dimensions, PixelRatio, Platform } from 'react-native'
import { useEffect, useState } from 'react'
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

const { width, height } = Dimensions.get('window')
const ContestantScore = ({contestant, currscore, type}) => {
    const [score, setScore] = useState(currscore)

    useEffect(()=>{
        setScore(currscore)
    },[currscore])

  return (
    <Pressable style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.name}>{contestant}</Text>
        </View>
        <Text style={styles.score}>${score}</Text>
    </Pressable>
  )
}

export default ContestantScore

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: '#6a41ff',
        borderWidth: 4,
        borderRadius: 25,
        width: width * 0.40,
        height: height * 0.12,
        margin: '2%',
        justifyContent: 'space-between'
        
    },
    innerContainer: {
        backgroundColor: '#6a41ff',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '30%',
    },
    name: {
        color: 'white',
        fontSize: normalize(20)
    },
    score : {
        color: 'white',
        fontSize: normalize(30),
        paddingBottom: '10%'
    }
})