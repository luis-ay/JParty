import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../../../features/gameSlice'
import CrossSvg from '../../../SVGS/CrossSVG'
import CheckSvg from '../../../SVGS/CheckSVG'
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const { width, height } = Dimensions.get('window')
const Answer = ({contestant ,answer, wager}) => {
    const [correct, setCorrect] = useState(2) //using 0,1,2   0 incorrect, 1, correct, 2 not decided yet
    const dispatch = useDispatch()

    const handleCorrect = () => {
        // ReactNativeHapticFeedback.trigger("impactLight");
        if (correct == 0) {
            setCorrect(1)
            dispatch(addScore({contestant:contestant, amount:2*wager}))
        }
        else if (correct == 2) {
            setCorrect(1)
            dispatch(addScore({contestant:contestant, amount:wager}))
        }
    }
    const handleIncorrect = () => {
        // ReactNativeHapticFeedback.trigger("impactLight");
        if (correct == 1) {
            setCorrect(0)
            dispatch(subScore({contestant:contestant, amount: 2*wager}))
        }
        else if (correct == 2) {
            setCorrect(0)
            dispatch(subScore({contestant:contestant, amount: wager}))
        }
    }

  return (
    <View style={styles.outerContainer}>
        <Text style={{color: 'white'}}>{contestant}</Text>
        <View style={styles.container}>
            <View style={styles.answerContainer}>
                <Text style={{color: 'white'}}>{answer}</Text>
                <Text style={{color: '#FFD700'}}>${wager}</Text>
            </View>
            <View style={{flexDirection:'row',width: '50%', justifyContent: 'flex-end', alignItems: 'center'}}>
                <View style={{width:0,height:'80%',borderColor:'#272B4A', borderWidth:2, borderRadius:10}}></View>
                <Pressable style={correct==1 ? styles.active: styles.inactive} onPress={()=>handleCorrect()}>
                    <CheckSvg/>
                </Pressable>
                <View style={{width:0,height:'80%',borderColor:'#272B4A', borderWidth:2, borderRadius:10}}></View>
                <Pressable style={correct==0 ? styles.active: styles.inactive} onPress={()=>handleIncorrect()}>
                    <CrossSvg/>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default Answer

const styles = StyleSheet.create({
    outerContainer: {
        width: width * 0.90,
        alignItems: 'center',
        marginVertical: height * 0.02
    },
    container: {
        borderColor: '#6A41FF',
        borderWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.08,
        width: '100%',
        borderRadius: 10,
    },
    answerContainer: {
        width: '50%',
        alignItems: 'center',
    },
    answer: {
        color: 'white',
    },
    wager: {
        color: 'white',
    },
    active : {
        backgroundColor: '#6A41FF',
        width: height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    inactive: {
        width: height * 0.08,
        justifyContent: 'center',
        alignItems: 'center'
    }
})