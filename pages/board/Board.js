import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { selectAllScores, selectDeductions, selectGameMode } from '../../features/gameSlice'
import Category from './Category'
import { useIsFocused } from '@react-navigation/native'
import HostPanel from './HostPanel'
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet'


const Board = ({navigation}) => {

    const storedScores = useSelector(selectAllScores)
    const storedDeductions = useSelector(selectDeductions)
    const storedRebuzz = useSelector(selectGameMode)

    const [scores, setScores] = useState(storedScores)
    const rebuzz = useRef(storedRebuzz)
    const deductions = useRef(storedDeductions)
    const [double, setDouble] = useState(false)
    const [values, setValues] = useState([200,400,600,800,1000])
    const [currAmt, setAmt] = useState(0)
    const [panelOpen, setPanel] = useState(false)

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

    const bottomSheetModalRef = useRef(null)

    const handlePresentModalPress = (val) => {
        console.log('clicked')
        setAmt(val)
        setPanel(true)
        bottomSheetModalRef.current?.present();
      }

      const closePanel = () => {
        console.log('closing panel')
        setScores(storedScores)
        setPanel(false)
      }

  return (
        <View>

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
                    {values.map(val => <Category key={val} value={val} answerCount={0} handleClick={handlePresentModalPress}/>)}
                </View>

                <View style={styles.scoresContainer}>
                    <Text style={styles.scoreText}>Scores:</Text>
                    {Object.entries(scores).map(entry => <Text style={styles.scoreText} key={entry[0]}>{entry[0]}: {entry[1]} </Text>)}
                </View>
            </ScrollView>
            <BottomSheetModalProvider>
                    <HostPanel modalRef={bottomSheetModalRef} value={currAmt} close={closePanel}/>
            </BottomSheetModalProvider>
        </View>
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