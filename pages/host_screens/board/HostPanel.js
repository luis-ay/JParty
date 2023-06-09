import { StyleSheet, Text, View, ScrollView, Pressable, Dimensions, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeductions, selectGameMode, subScore } from '../../../features/gameSlice'
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { addScore } from '../../../features/gameSlice'
import { BottomSheetModal} from '@gorhom/bottom-sheet'
import CheckSVG from "../../../SVGS/CheckSVG"
import CrossSVG from "../../../SVGS/CrossSVG"
import BuzzIn from './BuzzIn'


const HostPanel = ({panelAmount, modalRef}) => {
    const [amount, setAmt] = useState(panelAmount)
    const [dailyDoubleOn, setDailyDouble] = useState(false)
    const [leftClicked, setLeftClicked] = useState(false)
    const [rightClicked, setRightClicked] = useState(false)
    const [buzzedIn, setBuzzedIn] = useState(['Luis','Timmy','A'])
    const mode = useSelector(selectGameMode)
    const deductions = useSelector(selectDeductions)
    const dispatch = useDispatch()
    const [allMarked, setAllMarked] = useState(0)

    useEffect(()=> {
      setAmt(panelAmount)
    },[panelAmount])

    const snapPoints = useMemo(()=> ['10%','25%','50%','78%'],[])
    
      // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log(`amount recieved by panel ${panelAmount} during ${index > 0? 'open': 'close'}`)
      console.log(`Daily double is ${dailyDoubleOn}`)
      // console.log('handleSheetChanges', index);
    }, []);

    const handleDailyDouble= () => {
        if (!dailyDoubleOn) {
            setAmt(amount*2)  
            setDailyDouble(true)
        }
        else {
            setAmt(amount/2)
            setDailyDouble(false)
        }
    }

    const handleIncorrect = (contestant) => { 
        /////////////////////////////////// LUIS IS HARDCODED FOR NOW ///////////////////////////////////////////////////////////
        // deduct points from contestant score (if deductions are on)
        
        if (deductions) {
            console.log(`${contestant} failed and got ${amount} points taken.`)
            dispatch(subScore({contestant:contestant, amount:amount}))
        }
    }
    const handleCorrect = (contestant) => { 
        /////////////////////////////////// LUIS IS HARDCODED FOR NOW ///////////////////////////////////////////////////////////
        //needs to check game mode at call location
        console.log(`${contestant} scored and got ${amount} points added.`)
        dispatch(addScore({contestant:contestant, amount:amount}))
        handleClose()
    }
    
    const checkAllMarked = (markedInt) => {
      console.log(`checkallmarked called with markedint:${markedInt} and allmarked:${allMarked}`)
      if (markedInt != 2) {
        setAllMarked(allMarked + 1)
      }
    }


    const handleClose = () => {
      console.log(`gamemode:${mode}, allMarked:${allMarked}, buzzedIn.length:${buzzedIn.length}`)
      if ((mode == 0) && (allMarked != buzzedIn.length)) {
        Alert.alert('Warning', 'Please mark all buzzed in contestants.', [
          {text: 'OK'},
        ]);
      }
      else {
        modalRef.current.close()
        if (dailyDoubleOn) {
          setDailyDouble(false)
          setAmt(amount/2)
        }
        setAllMarked(0)
      }
    }

  return (
        <BottomSheetModal
          ref={modalRef}
          index={3}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          backgroundStyle={styles.container}
        >
          <View style={styles.modalContentContainer}>
          
            
            {(mode != 0) &&
            <View>
                <Text style={styles.panelText}>BUZZED IN: LUIS</Text> 

                <View style={styles.underline}></View>
            </View>
            }

            <View style={styles.moneyContainer}>
              <Text style={styles.money}>${amount}</Text>
            </View>

            
            <Pressable style={dailyDoubleOn ? styles.dailyOFFButton : styles.dailyONButton} onPress={handleDailyDouble}>
                <Text style={dailyDoubleOn ? styles.dailyTextOff: styles.dailyTextOn} >Daily Double</Text>
            </Pressable>

            {(mode != 0) && 
            <View style={styles.cor_incContainer}> 
              <Pressable onPress={()=>handleCorrect('Luis')} style={leftClicked? styles.svgContainer:styles.svgContainerOff} onPressIn={()=>setLeftClicked(true)} onPressOut={()=>setLeftClicked(false)}>
                  <CheckSVG/>
              </Pressable>
              <View style={{width:0,height:'70%',borderColor:'#272B4A', borderWidth:2,}}></View>
              <Pressable onPress={()=>handleIncorrect('Luis')} style={rightClicked? styles.svgContainer:styles.svgContainerOff} onPressIn={()=>setRightClicked(true)} onPressOut={()=>setRightClicked(false)}>
                  <CrossSVG/>
              </Pressable>
            </View>
            }

            {(mode == 0) &&
            <View style={{alignItems:'center', marginTop:'4%'}}>
              <Text style={{color: 'white', fontSize:20}}>BUZZED IN:</Text>
              <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly', marginVertical:'3%'}}>
                  {buzzedIn.map((contestant,idx)=>
                    <BuzzIn key={idx} contestant={contestant} amount={amount} checkAllMarked={checkAllMarked}/>
                  )}
              </View>
              <Pressable onPress={()=> handleClose()}>
                <Text style={{color: 'white', fontSize:30}}>Submit</Text>
              </Pressable>
            </View>
            }

            
          </View>
        </BottomSheetModal>
    )
  }
  
  export default HostPanel
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#272B4A',
    },
    modalContentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    moneyContainer: {
      backgroundColor: '#16182A',
      height: Dimensions.get("screen").height * 0.15,/*padding encroached upon height so made 8.1 to fit Gs*/
      width:  Dimensions.get("screen").width * 0.70,
      borderRadius: Dimensions.get("screen").width * 0.05,
      marginVertical: '5%',
      textAlign:'center',
      justifyContent:'center'
    },
    money:{
      textAlign:'center',
      fontSize:60,
      color:'white',
      //marginVertical:'10%',
      fontWeight:'700'
      
    },
    panelText:{
      fontSize:40,
      color:'white',
      marginVertical:'5%',
      fontWeight:'700'
    },
    moneyColor: {
      color: '#6A41FF',
      textDecorationLine: 'none',
    },
    dailyONButton: {
      borderWidth:2,
      alignItems: 'center',
      height: Dimensions.get("screen").height * 0.10,/*padding encroached upon height so made 8.1 to fit Gs*/
      width:  Dimensions.get("screen").width * 0.6,
      borderRadius: 25,
      borderColor: '#FFD700',
      justifyContent:'center'
    }, 
    dailyOFFButton: {
      borderWidth: 2,
      alignItems: 'center',
      height: Dimensions.get("screen").height * 0.10,/*padding encroached upon height so made 8.1 to fit Gs*/
      width:  Dimensions.get("screen").width * 0.6,
      borderRadius: 25,
      borderColor: '#6A41FF',
      justifyContent:'center'
    },
    dailyTextOn:{
      fontSize:36,
      color:'#FFD700'
    },
    dailyTextOff:{
      fontSize:36,
      color:'white'
    },
    underline: {
      width: Dimensions.get("screen").width * 0.8,
      height: 1,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
    },
    cor_incContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#16182A',
      width: '70%',
      height: '15%',
      marginVertical: '10%',
      borderRadius: 10
    },
    svgContainer: {
      width:'49%',
      height:'100%', 
      alignItems:'center', 
      justifyContent:'center',
      backgroundColor: '#6A41FF',
      borderRadius:10
    },
    svgContainerOff: {
      width:'49%',
      height:'100%', 
      alignItems:'center', 
      justifyContent:'center',
    }
  })