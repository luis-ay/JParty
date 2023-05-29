import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Buzzer = ({navigation}) => {
    const [ready, setReady] = useState(false)


    const handleBuzzIn = () => {
        if (ready) {
            console.log('Buzzed In')
        }
    }

  return (
    <Pressable onPress={()=>handleBuzzIn()}>
        <View style={ready? styles.ready : styles.unready}>
            <Text style={styles.score}>{4000}</Text>
            <Text style={{color:'white', fontSize: 20}}>{ready ? 'Click anywhere to buzz in.': 'Wait for host.'}</Text>
            <Pressable onPress={()=>setReady(!ready)}><Text>Click Ready/Unready</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Main')}>
                <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('FinalJParty')}>
                <Text style={{fontSize:36, color:'white', top:'50%'}}>FinalJParty</Text>
            </Pressable>
        </View>
    </Pressable>
  )
}

export default Buzzer

const styles = StyleSheet.create({
    ready: {
        backgroundColor: '#6A41FF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    unready: {
        backgroundColor: '#38218a',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    score: {
        margin: '10%',
        fontSize: 48,
        color: 'white',
        fontWeight: 800
    }
})