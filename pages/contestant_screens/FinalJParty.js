import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Slider } from '@miblanchard/react-native-slider'
import { useDispatch, useSelector } from 'react-redux'
import { addFinalAnswer, addWager, selectName } from '../../features/gameSlice'
import { useIsFocused } from '@react-navigation/native'

const FinalJParty = ({navigation}) => {
    const name = useSelector(selectName)
    const [ready, setReady] = useState(false)
    const [wager, setWager] = useState(0)
    const [answer, setAnswer] = useState('')
    const [limit, setLimit] = useState(1000)
    const [submitted, setSubmitted] = useState(false)

    const dispatch = useDispatch()

    const isFocused = useIsFocused() 
    
    useEffect(()=> {
        if (isFocused) {
            setSubmitted(false)
        }
      },[isFocused])

    const handleSubmit = () => {
        console.log(`Turned In :${!ready? 'wager': 'answer'} which is :${!ready? wager: answer}`) 
        if (!ready) {
            dispatch(addWager({contestant:name, wager:wager}))
            setReady(true)
        } else {
            checkAnswerInput()
        }
    }
    
    const checkAnswerInput = () => {
        if (answer=='') {
            alert('Please enter answer')
        }
        else {
            dispatch(addFinalAnswer({contestant:name, answer:answer}))
            setSubmitted(true)
        }
    }

  return (
    <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
        {!ready ?
        <View style={{alignItems:'center', width:'100%', height:'50%'}}>
            <Text style={styles.title}>Enter Wager:</Text>
            <Text style={styles.score}>{wager}</Text> 
            <View style={{width:'70%', marginTop:'15%'}}>
                <Slider value={wager} onValueChange={setWager} maximumTrackTintColor='white' minimumTrackTintColor='#8e6ffc' maximumValue={limit} minimumValue={0} step={100} trackClickable={true} thumbStyle={styles.thumb} trackStyle={styles.track}/>
            </View>
        </View>:
        <View style={{alignItems:'center', width:'100%', height:'50%'}}>
            <Text style={styles.title}>Enter Answer:</Text>
            <TextInput style={styles.answer} readOnly={submitted} onChangeText={setAnswer} placeholder='What is deez' placeholderTextColor={'#b8b3c9'} maxLength={30} returnKeyType="done"></TextInput>
        </View>
        }
        <Pressable onPress={()=> handleSubmit()}><Text style={{fontSize: 40, color: 'white', fontWeight: 800}}>Submit</Text></Pressable>
        <Pressable onPress={()=>setReady(!ready)}><Text>Click wager/answer</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>
    </Pressable>
  )
}

export default FinalJParty

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#38218a',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        margin: '10%',
        fontSize: 40,
        color: 'white',
        fontWeight: 800
    },
    score: {
        fontSize: 48,
        color: 'white',
        fontWeight: 800,
        marginTop:'10%'
    },
    answer: {
        marginVertical: '30%',
        backgroundColor: 'white',
        width: '70%',
        height: '15%',
        borderRadius: 25,
        padding: 15,
        fontSize: 20,
    },
    track: {
        borderRadius: 25,
        height: 15,
    },
    thumb: {
        height: 40,
        width:12,
        borderRadius:25,
        backgroundColor: '#6A41FF'
    }
})