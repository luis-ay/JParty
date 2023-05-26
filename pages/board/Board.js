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

    const handleDoublePress = () => {
        if (double) {
            setDouble(false)
            setValues([200,400,600,800,1000])
        }
        else {
            setDouble(true)
            setValues([400,800,1200,1600,2000])
        }
    }

  return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
            <Text style={styles.logo}>J<Text style={styles.logoColor}>!</Text>PARTY</Text>
            <Pressable onPress={() => navigation.navigate('Main')}>
                <Text style={{fontSize:36, color:'white'}}>Back</Text>
            </Pressable>

            <View>
                <Pressable onPress={handleDoublePress}>
                    <Text  style={{fontSize:36, color:'white'}}>{double ?'Single J!Party' : 'Double J!Party'}</Text>
                </Pressable>
            </View>

            <View style={styles.categoriesContainer}>
                {values.map(val => <Category key={val} value={val} answerCount={0} navigation={navigation}/>)}
            </View>

            <View style={styles.scoresContainer}>
                <Text style={styles.scoreText}>Scores:</Text>
                {Object.entries(scores).map(entry => <Text style={styles.scoreText} key={entry[0]}>{entry[0]}: {entry[1]} </Text>)}
            </View>
        </ScrollView>
  )
}

export default Board

export const responsiveSize = () => {
    const currentScreen = Dimensions.get('window')
    return {'height': currentScreen.height, 'width':currentScreen.width}
  }

const styles = StyleSheet.create({
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
    container: {
        backgroundColor: '#16182A',
    },
    scrollcontainer: {
        marginTop:100,
        paddingBottom: 150 ///This is very important for scrolling to the bottom, adjust as needed
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