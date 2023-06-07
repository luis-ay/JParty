import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, } from 'react-native'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { selectAllScores, selectDeductions, selectGameMode } from '../../../features/gameSlice'
import Category from './Category'
import { useIsFocused } from '@react-navigation/native'
import HostPanel from './HostPanel'
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet'
import Contestant from './Contestant'


const Board = ({navigation}) => {

    const storedScores = useSelector(selectAllScores)
    const storedDeductions = useSelector(selectDeductions)
    const storedRebuzz = useSelector(selectGameMode)

    const [scores, setScores] = useState(storedScores)
    const rebuzz = useRef(storedRebuzz)
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
                
            <View style={styles.backAndEndContainer}>
                    <Text style={styles.endGameText}>End Game</Text>
                    
                    <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={{fontSize:25, color:'white',marginRight: Dimensions.get("screen").height * 0.225}}>Back</Text>
                    </Pressable>
            </View>

            <View style={styles.endGameUnderline}></View>

                <Text style={styles.logo}>GAME<Text style={styles.logoColor}>!</Text>BOARD</Text>
                
                    
                <View style={styles.JButtonContainer}>
                
                    <Pressable onPress={() => navigation.navigate('FinalJPartyControl')} style={styles.finalJButton}>
                        <Text style={styles.finalJeopardyTextColor}>FINAL</Text>
                        <View style={styles.FinalJeopardyUnderline}></View>
                        <Text style={styles.finalJeopardyTextColor}>J ! PARTY</Text>
                    </Pressable>
                    
                    <Pressable onPress={handleDoublePress} style={double? styles.singleJeopardyButton : styles.doubleJeopardyButton}>
                        <Text  style={styles.doubleJeopardyTextColor}>DOUBLE</Text>
                        <View style={styles.DoubleJeopardyUnderline}></View>
                        <Text  style={styles.doubleJeopardyTextColor}>J ! PARTY</Text>
                    </Pressable>
                    
                </View>
                
                

                <View style={styles.categoriesContainer}>
                    {values.map(val => <Category key={val} value={val} answerCount={0} modalOpenRef={bottomSheetModalRef} panelAmountCall={panelAmountCall} />)}
                </View>

                <Text style={styles.scoreText}>Click on Scores To Adjust</Text>
                <View style={styles.scoresContainer}>
                    {Object.entries(scores).map(entry => <Contestant key={entry[0]} contestant={entry[0]} currscore={entry[1]}/>)}
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
        textAlign: 'center',
        fontSize:55,
        color:'white',
        marginTop:Dimensions.get("screen").height * 0.03,
        marginBottom:Dimensions.get("screen").height * 0.03,
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
        
    },
    scrollcontainer: {
        paddingBottom: 100 ///This is very important for scrolling to the bottom, adjust as needed
    },
    categoriesContainer: {
        width: '100%',
        marginBottom: '5%',
    },
    scoresContainer: {
        margin: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    scoreText: {
        color:'white',
        textAlign:'center',
        fontSize: 32,
    },    
    endGameText: {
        
        color:'white',
        textAlign:'right',
        marginRight: Dimensions.get("screen").width * 0.04,
        fontSize: 25,
    },
    backAndEndContainer:{
        flexDirection:'row-reverse',
        marginTop: Dimensions.get("screen").height * 0.08,
    },
    JButtonContainer: {     
        flexWrap:'wrap',
        flexDirection:'row-reverse',
        justifyContent:'space-evenly',
        alignItems: 'center',
        marginBottom: '8%',
    }, 
    finalJButton:{    
        borderWidth:4,
        borderColor:'#6A41FF',
        alignItems: 'center',
        paddingVertical:'5%',
        paddingHorizontal:'2%',
        borderRadius:25,
        justifyContent: 'center'
    },    
    doubleJeopardyButton: {
        borderWidth:4,
        borderColor: '#FFD700',
        alignItems: 'center',
        paddingVertical:'5%',
        paddingHorizontal:'2%',
        borderRadius: 25,
        justifyContent: 'center'
    },
    singleJeopardyButton: {
        borderWidth:4,
        borderColor: '#6A41FF',
        alignItems: 'center',
        paddingVertical:'5%',
        paddingHorizontal:'2%',
        borderRadius: 25,
        textAlign:'center',
    },
    doubleJeopardyTextColor: {
        color:'#FFD700',
        fontSize: 22,
        marginVertical: '2%'
    },
    finalJeopardyTextColor: {
        color: 'white',
        fontSize: 22,
        marginVertical: '2%'
    },
    DoubleJeopardyUnderline: {
        width: Dimensions.get("screen").width * 0.20,
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    FinalJeopardyUnderline: {
        width: Dimensions.get("screen").width * 0.2,
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    endGameUnderline: {
        width: Dimensions.get("screen").width * 0.30,
        marginLeft:Dimensions.get("screen").width * 0.665,
        height: 1,
        alignContent:'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
})