import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { selectAllScores, selectDeductions, selectGameMode } from '../../features/gameSlice'
import Category from './Category'

const Board = ({navigation}) => {

    const storedScores = useSelector(selectAllScores)
    const storedDeductions = useSelector(selectDeductions)
    const storedRebuzz = useSelector(selectGameMode)

    const [scores, setScores] = useState(storedScores)
    const [rebuzz, setRebuzz] = useState(storedRebuzz)
    const [deductions, setDeductions] = useState(storedDeductions)
    const [double, setDouble] = useState(false)
    const [values, setValues] = useState([200,400,600,800,1000])

  return (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', marginTop:80}}>Back</Text>
        </Pressable>
        <ScrollView contentContainerStyle={styles.scrollcontainer} style={styles.scroll}>
            <View style={styles.categoriesContainer}>
                {values.map(val => <Category value={val} answerCount={0}/>)}
            </View>

            <View style={styles.scoresContainer}>
                <Text style={styles.scoreText}>Scores:</Text>
                {Object.entries(scores).map(entry => <Text style={styles.scoreText} key={entry[0]}>{entry[0]}: {entry[1]} </Text>)}
            </View>
        </ScrollView>
    </View>
  )
}

export default Board

export const responsiveSize = () => {
    const currentScreen = Dimensions.get('window')
    return {'height': currentScreen.height, 'width':currentScreen.width}
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16182A',
        alignItems: 'center',
    },
    scrollcontainer: {
        backgroundColor: '#16182A',
        flex:1,
        marginVertical:10,
    },
    scroll: {
        height: '100%',
        width: '90%',
    },
    categoriesContainer: {
        width: '100%',
        marginBottom: '2%',
    },
    scoresContainer: {
        marginVertical: '2%',
    },
    scoreText: {
        color:'white',
        fontSize: 32,
    }
})