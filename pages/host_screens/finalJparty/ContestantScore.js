import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import React from 'react'

const { width, height } = Dimensions.get('window')
const ContestantScore = ({contestant, currscore, type}) => {
    const [score, setScore] = useState(currscore)
    const [wager, setWager] = useState('-')
    const [answer, setAnswer] = useState('-')


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
        fontSize: 20
    },
    score : {
        color: 'white',
        paddingTop: '5%',
        fontSize: 30
    }
})