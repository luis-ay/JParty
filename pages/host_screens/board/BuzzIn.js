import { StyleSheet, Text, View, Dimensions, Pressable, Platform, PixelRatio } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../../../features/gameSlice'
import CheckSvg from '../../../SVGS/SmallCheckSVG'
import CrossSvg from '../../../SVGS/SmallCrossSVG'

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

const BuzzIn = ({contestant, amount, checkAllMarked}) => {
    const [correct, setCorrect] = useState(2) //using 0,1,2   0 incorrect, 1, correct, 2 not decided yet
    const dispatch = useDispatch()

    const handleCorrect = () => {
        // ReactNativeHapticFeedback.trigger("impactLight");
        if (correct == 0) {
            setCorrect(1)
            dispatch(addScore({contestant:contestant, amount:2*amount}))
        }
        else if (correct == 2) {
            setCorrect(1)
            dispatch(addScore({contestant:contestant, amount:amount}))
        }
        checkAllMarked(contestant)
    }
    const handleIncorrect = () => {
        // ReactNativeHapticFeedback.trigger("impactLight");
        if (correct == 1) {
            setCorrect(0)
            dispatch(subScore({contestant:contestant, amount: 2*amount}))
        }
        else if (correct == 2) {
            setCorrect(0)
            dispatch(subScore({contestant:contestant, amount: amount}))
        }
        checkAllMarked(contestant)
    }

  return (
    <View style={styles.container}>
        <Text style={{color: 'white', textAlign:'center', width:'40%', fontSize:normalize(24)}}>{contestant}</Text>
        <View style={{flexDirection:'row',width: '40%',height:'100%', justifyContent: 'flex-end', alignItems: 'center'}}>
            <View style={{width:0,height:'80%',borderColor:'#272B4A', borderWidth:2, borderRadius:10}}></View>
            <Pressable style={correct==1 ? styles.active: styles.inactive} onPress={()=>handleCorrect()}>
                <CheckSvg/>
            </Pressable>
            <View style={{width:0,height:'80%',borderColor:'#16182A', borderWidth:2, borderRadius:10}}></View>
            <Pressable style={correct==0 ? styles.active: styles.inactive} onPress={()=>handleIncorrect()}>
                <CrossSvg/>
            </Pressable>
        </View>
    </View>
  )
}


export default BuzzIn

const styles = StyleSheet.create({
    container: {
        borderColor: '#16182A',
        borderWidth: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height * 0.06,
        width: width * 0.45,
        borderRadius: 10,
        marginVertical: '1%'
    },
    answerContainer: {
        width: '50%',
        alignItems: 'center',
    },
    answer: {
        color: 'white',
    },
    active : {
        backgroundColor: '#6A41FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: '100%',
        width: '65%'
    },
    inactive: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%'
    }
})