import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Waiting = ({navigation}) => {
    const [answerReady, setAnswerReady] = useState(false)
    const [endReady, setEndReady] = useState(false)

    useEffect(()=> {
        if (answerReady) {
            navigation.navigate('FinalJParty')
            setAnswerReady(false)
        }
        else if (endReady) {
            navigation.navigate('Ending')
            setEndReady(false)
        }
    },[answerReady,endReady])

    const handleAnswerReady = () => {
        setAnswerReady(true)
    }

    const handleEndReady = () => {
        setEndReady(true)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
      <Text style={{fontSize:36, color:'white'}}>WAITING FOR HOST...</Text>
      <Pressable onPress={() => handleAnswerReady()}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Go to Answer</Text>
    </Pressable>
      <Pressable onPress={() => handleEndReady()}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Go to End</Text>
    </Pressable>
      <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
    </Pressable>
    </View>
  )
}

export default Waiting

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16182A',
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
})