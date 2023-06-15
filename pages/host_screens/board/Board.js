import { StyleSheet, Text, View, Pressable, ScrollView, Alert, PixelRatio, Platform, Dimensions} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { selectAllScores, selectDeductions, selectGameMode, addGame , clearGame, selectSortedScores } from '../../../features/gameSlice'
import Category from './Category'
import { useIsFocused } from '@react-navigation/native'
import HostPanel from './HostPanel'
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet'
import Contestant from './Contestant'
import BackButtonSVG from '../../../SVGS/BackButtonSVG'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 428;
  
  export function normalize(size) {
    const newSize = size * scale 
    console.log(scale) 
    console.log(newSize) 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

const Board = ({navigation}) => {

    const storedScores = useSelector(selectAllScores)
    const storedDeductions = useSelector(selectDeductions)
    const storedMode = useSelector(selectGameMode)
    const storedSortedScores = useSelector(selectSortedScores)
    const [sortedScores, setSortedScores] = useState(storedSortedScores)
    const [scores, setScores] = useState(storedScores)
    const [double, setDouble] = useState(false)
    const [values, setValues] = useState([200,400,600,800,1000])
    const [panelAmt, setPanelAmt] = useState(0)
    const dispatch = useDispatch()
    
    const isFocused = useIsFocused() ///sets scores every time we navigate to board screen isFocused -> true, runs useEffect
    
    useEffect(()=> {
        if (isFocused) {
            setScores(storedScores)
            setSortedScores(storedSortedScores)
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

    const handleGameEnd = () => {
        dispatch(addGame(sortedScores))
        dispatch(clearGame())
        navigation.navigate('Main')
    }

    const endGameAlert = () => {
        Alert.alert('Warning', 'Are you sure you want to end the game before Final J!Party?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => handleGameEnd()},
          ]);
    }

    const finalJPartyAlert = () => {
        Alert.alert('Warning', 'Moving on to Final J!Party', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('FinalJPartyControl')},
          ]);
    }

    const bottomSheetModalRef = useRef(null) //used for referencing modal during open/close

  return (
        <View style={styles.screen}>

            

            <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer} alwaysBounceVertical={false}>
                
                <View style={styles.backAndEndContainer}>
                    <Pressable onPress={()=> endGameAlert()}>
                        <Text style={styles.endGameText}>End Game</Text>
                        <View style={styles.endGameUnderline}></View>
                    </Pressable>
                    
                    <Pressable onPress={() => navigation.navigate('Main')}>
                        <BackButtonSVG/>
                    </Pressable>
                </View>

            

                <Text style={styles.logo}>GAME<Text style={styles.logoColor}>!</Text>BOARD</Text>
                
                    
                <View style={styles.JButtonContainer}>
                
                    <Pressable onPress={() => finalJPartyAlert()} style={styles.finalJButton}>
                        <Text style={styles.finalJeopardyTextColor}>FINAL</Text>
                        <View style={styles.FinalJeopardyUnderline}></View>
                        <Text style={styles.finalJeopardyTextColor}>J ! PARTY</Text>
                    </Pressable>
                    
                    <Pressable onPress={handleDoublePress} style={double? styles.singleJeopardyButton : styles.doubleJeopardyButton}>
                        <Text  style={double ? styles.doubleJeopardyOffTextColor:styles.doubleJeopardyOnTextColor}> DOUBLE</Text>
                        <View style={styles.DoubleJeopardyUnderline}></View>
                        <Text  style={double ? styles.doubleJeopardyOffTextColor:styles.doubleJeopardyOnTextColor}> J ! PARTY</Text>
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
        fontSize:normalize(55),
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
        color:'#cccccc',
        textAlign:'center',
        fontSize: normalize(24),
    },    
    endGameText: {
        
        color:'white',
        textAlign:'right',
        marginRight: Dimensions.get("screen").width * 0.04,
        fontSize: normalize(25),
    },
    backAndEndContainer:{
        flexDirection:'row-reverse',
        marginTop: Dimensions.get("screen").height * 0.08,
        justifyContent:'space-between',
        marginHorizontal:'1%',
        alignItems: 'center'
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
    doubleJeopardyOnTextColor: {
        color:'#FFD700',
        fontSize: normalize(22),
        marginVertical: '2%'
    },
    doubleJeopardyOffTextColor: {
        color:'white',
        fontSize: normalize(22),
        marginVertical: '2%'
    },
    finalJeopardyTextColor: {
        color: 'white',
        fontSize: normalize(22),
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
        height: 1,
        width:'90%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
})