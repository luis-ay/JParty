import { StyleSheet, Text, View, ScrollView, Pressable, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeductions, selectGameMode, subScore } from '../../../features/gameSlice'
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { addScore } from '../../../features/gameSlice'
import { BottomSheetModal} from '@gorhom/bottom-sheet'
import { JumpingTransition } from 'react-native-reanimated'
import CheckSVG from "../../../SVGS/CheckSVG"
import CrossSVG from "../../../SVGS/CrossSVG"
import BackButtonSVG from "../../../SVGS/BackButtonSVG"


const HostPanel = ({panelAmount, modalRef}) => {
    const [amount, setAmt] = useState(panelAmount)
    const [dailyDoubleOn, setDailyDouble] = useState(false)
    const rebuzz = useSelector(selectGameMode)
    const deductions = useSelector(selectDeductions)
    const dispatch = useDispatch()

    useEffect(()=> {
      setAmt(panelAmount)
    },[panelAmount])

    const snapPoints = useMemo(()=> ['10%','25%','50%','75%'],[])
    
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
        //needs to check for rebuzzz
        console.log(`${contestant} scored and got ${amount} points added.`)
        dispatch(addScore({contestant:contestant, amount:amount}))
        handleClose()
    }

    const handleClose = () => {
      modalRef.current.close()
      if (dailyDoubleOn) {
        setDailyDouble(false)
        setAmt(amount/2)
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
          
            
            <Text style={styles.panelText}>BUZZED IN: LUIS</Text>

            <View style={styles.underline}></View>

            <View style={styles.moneyContainer}>
              <Text style={styles.money}>${amount}</Text>
            </View>

            
            <Pressable style={dailyDoubleOn ? styles.dailyOFFButton : styles.dailyONButton}>
                <Text style={{fontSize:36, color:'#FFD700'}} onPress={handleDailyDouble}>Daily Double</Text>
            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable onPress={()=>handleCorrect('Luis')}>
                  <CheckSVG />
              </Pressable>
              
              <Pressable onPress={()=>handleIncorrect('Luis')}>
                  <CrossSVG/>
              </Pressable>
            </View>

            <Pressable onPress={() =>  handleClose()}>
              <Text style={{fontSize:36, color:'white'}}>Back</Text>
            </Pressable>
            
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
      marginVertical: Dimensions.get("screen").height * 0.05,
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
      backgroundColor: '#16182A',
      //borderWidth:2,
      alignItems: 'center',
      //marginTop:Dimensions.get("screen").height * 0.05,
      height: Dimensions.get("screen").height * 0.10,/*padding encroached upon height so made 8.1 to fit Gs*/
      width:  Dimensions.get("screen").width * 0.6,
      borderRadius: 25,
      //borderColor: '#FFD700',
      justifyContent:'center'
    }, 
    dailyOFFButton: {
      backgroundColor: '#6A41FF',
     // borderWidth: 2,
      alignItems: 'center',
      height: Dimensions.get("screen").height * 0.10,/*padding encroached upon height so made 8.1 to fit Gs*/
      width:  Dimensions.get("screen").width * 0.6,
      borderRadius: 25,
      //borderColor: '#16182A',
      justifyContent:'center'

  },
    underline: {
      width: Dimensions.get("screen").width * 0.8,
      height: 1,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
  },
  })