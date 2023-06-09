import { StyleSheet, Text, View, Pressable, Keyboard, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput,} from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { addFinalAnswer, selectName } from '../../features/gameSlice'
import { useIsFocused } from '@react-navigation/native'


const FinalJParty = ({navigation}) => {

    const name = useSelector(selectName)
    const [answer, setAnswer] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()

    const isFocused = useIsFocused() 
    
    useEffect(()=> {
        if (isFocused) {
            setSubmitted(false)
        }
      },[isFocused])

    const handleSubmit = () => {
        console.log(`Turned In 'answer' which is :${answer}`) 
        checkAnswerInput()
    }
    
    const checkAnswerInput = () => {
        if (answer=='') {
            Alert.alert('Warning', 'Please enter response.', [
                {text: 'OK'},
              ]);
        }
        else {
            navigation.navigate('Waiting')
            dispatch(addFinalAnswer({contestant:name, answer:answer}))
            setSubmitted(true)
        }
    }

  return (
    <ImageBackground source={require('../../assets/deepfried_1685990589916.jpg')} style={styles.image} resizeMode="cover">
        <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
            <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
            <View style={{alignItems:'center', width:'100%', height:'50%'}}>
                <Text style={styles.title}>Enter Answer:</Text>
                <TextInput style={styles.answer} readOnly={submitted} onChangeText={setAnswer} placeholder='What is deez' placeholderTextColor={'#b8b3c9'} maxLength={30} returnKeyType="done"></TextInput>
            </View>
            <Pressable onPress={()=> handleSubmit()}><Text style={{fontSize: 40, color: 'white', fontWeight: 800}}>Submit</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Main')}>
                <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
            </Pressable>
        </Pressable>
    </ImageBackground>
  )
}

export default FinalJParty

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:'100%',
        opacity: .95
    },
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    logo:{
        fontSize:36,
        color:'white',
        marginVertical:'10%',
        fontWeight:'700',
    },
    logoColor: {
        color: '#6A41FF',
        textDecorationLine: 'none',
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