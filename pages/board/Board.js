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
    const [panelAmt, setPanelAmt] = useState(0)
    
    const isFocused = useIsFocused() ///sets scores every time we navigate to board screen isFocused -> true, runs useEffect
    
    useEffect(()=> {
        if (isFocused) {
            setScores(storedScores)
        }
      },[isFocused, storedScores])


    const handleDoublePress = () => {  //Sets values for double jeopardy
        if (double) {
            console.log(`values on categories ${values}`)
            setDouble(false)
            setValues([200,400,600,800,1000])
        }
        else {
            console.log(`values on categories ${values}`)
            setDouble(true)
            setValues([400,800,1200,1600,2000])
        }
    }

    const panelAmountCall = (val) => {
        setPanelAmt(val)
        console.log(`recieved from cat click: ${val}`)
    }


    const bottomSheetModalRef = useRef(null) //used for referencing modal during open/close

  return (
        <View style={styles.screen}>

            <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer} alwaysBounceVertical={false}>
                <Text style={styles.logo}>J<Text style={styles.logoColor}>!</Text>PARTY</Text>
                <Pressable onPress={() => navigation.navigate('Main')}>
                    <Text style={{fontSize:36, color:'white'}}>Back</Text>
                </Pressable>

                <View>
                    <Pressable onPress={handleDoublePress} style={double? styles.singleJeopardyButton : styles.doubleJeopardyButton}>
                        <Text  style={{fontSize:36, color:'white'}}>{double ?'Single J!Party' : 'Double J!Party'}</Text>
                    </Pressable>
                </View>

                <View style={styles.categoriesContainer}>

                    {values.map(val => <Category key={val} value={val} answerCount={0} modalOpenRef={bottomSheetModalRef} panelAmountCall={panelAmountCall} />)}

                </View>

                <View style={styles.scoresContainer}>
                    <Text style={styles.scoreText}>Scores:</Text>
                    {Object.entries(scores).map(entry => <Text style={styles.scoreText} key={entry[0]}>{entry[0]}: {entry[1]} </Text>)}
                </View>
            </ScrollView>
            <BottomSheetModalProvider>
                    <HostPanel modalRef={bottomSheetModalRef} panelAmount={panelAmt} />
            </BottomSheetModalProvider>
        </View>
  )
}

export default Board


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
    screen: {
        backgroundColor: '#16182A',
    },
    container: {
        backgroundColor: '#16182A',
        marginTop: 60,
    },
    scrollcontainer: {
        paddingBottom: 120 ///This is very important for scrolling to the bottom, adjust as needed
    },
    categoriesContainer: {
        width: '100%',
        marginBottom: '5%',
    },
    scoresContainer: {
        marginVertical: '2%',
    },
    scoreText: {
        color:'white',
        fontSize: 32,
    },
    doubleJeopardyButton: {
        backgroundColor: '#FFD700',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: '10%',
        borderRadius: '10%',
    }, 
    singleJeopardyButton: {
        backgroundColor: '#2a1a66',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: '10%',
        borderRadius: '10%'
    }
})