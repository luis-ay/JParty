import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllScores, selectSortedScores } from '../../features/gameSlice'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

const Ending = ({navigation}) => {
    const storedScores = useSelector(selectAllScores)
    let sortedScores = useSelector(selectSortedScores)
    const [scores, setScores] = useState(sortedScores)
    const isFocused = useIsFocused()
    useEffect(()=> {
        if (isFocused) {
            setScores(sortedScores)
        }
    },[storedScores,isFocused])

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
        <Text style={{color: 'white', fontSize:36}}>Final Scores</Text>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.firstPlace}>1. {scores[0][0]} ${scores[0][1]}</Text>
            <Text style={styles.secondPlace}>2. {scores[1][0]} ${scores[1][1]}</Text>
            <View>
                {scores.length > 2 && scores.slice(2).map((entry,idx)=> 
                    <Text style={styles.thirdPlace} key={entry[0]}>{idx+3}. {entry[0]} ${entry[1]}</Text>)}
            </View>
        </View>
        <Text style={styles.thanks}>THANKS FOR PLAYING J!PARTY!!</Text>
        <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>
    </View>
  )
}

export default Ending

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
    firstPlace: {
        color:'#FFD700',
        fontSize: 62,
        marginBottom: '4%'
    },
    secondPlace: {
        color: 'white',
        fontSize: 42,
        marginBottom: '5%'
    },
    thirdPlace: {
        color: 'white',
        fontSize: 30,
        marginBottom: '2%'
    },
    thanks: {
        color: 'white',
        fontSize: 16
    }
})