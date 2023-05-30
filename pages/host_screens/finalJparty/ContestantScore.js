import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import React from 'react'

const ContestantScore = ({contestant, currscore}) => {
    const [score, setScore] = useState(currscore)
    const [wager, setWager] = useState('-')
    const [answer, setAnswer] = useState('-')
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{contestant}</Text>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.wager}>Wager: {wager}</Text>
      <Text style={styles.answer}>Answer: {answer}</Text>
    </Pressable>
  )
}

export default ContestantScore

const styles = StyleSheet.create({
    container: {
        height: '20%',
        width: '80%',
    },
    name: {
        color: 'white',
        fontSize: 40,
    },
    score: {
        color: 'white',
        fontSize: 30,
      
    },
    wager: {
        color: 'white',
        fontSize: 20,
        
    },
    answer: {
        color: 'white',
        fontSize: 15,

    }
})