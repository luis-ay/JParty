import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeductions, selectGameMode, subScore } from '../../features/gameSlice'
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { addScore } from '../../features/gameSlice'
import { BottomSheetModal} from '@gorhom/bottom-sheet'

const HostPanel = ({value, modalRef, close}) => {
    const [amount, setAmount] = useState(value)
    const [dailyDoubleOn, setDailyDouble] = useState(false)
    const rebuzz = useSelector(selectGameMode)
    const deductions = useSelector(selectDeductions)
    const dispatch = useDispatch()

    useEffect(()=> {
      setAmount(value)
    },[value])

    const snapPoints = useMemo(()=> ['10%','25%','50%','75%'],[])
    
      // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
      close()
    }, []);

    const handleDailyDouble= () => {
        if (!dailyDoubleOn) {
            setAmount(2*value)
            setDailyDouble(true)
        }
        else {
            setAmount(value)
            setDailyDouble(false)
        }
    }

    const handleIncorrect = (contestant) => { 
        /////////////////////////////////// LUIS IS HARDCODED FOR NOW ///////////////////////////////////////////////////////////
        // deduct points from contestant score (if deductions are on)
        if (deductions) {
            dispatch(subScore({contestant:contestant, amount:amount}))
        }
    }
    const handleCorrect = (contestant) => { 
        /////////////////////////////////// LUIS IS HARDCODED FOR NOW ///////////////////////////////////////////////////////////
        //needs to check for rebuzzz
        console.log('correct you scored')
        dispatch(addScore({contestant:contestant, amount:amount}))
        handleClose()
    }

    const handleClose = () => {
      setDailyDouble(false)
      close()
      modalRef.current.close()
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

            <Text style={styles.logo}>HOST PANEL<Text style={styles.logoColor}>!</Text></Text>

            <Pressable onPress={() =>  handleClose()}>
              <Text style={{fontSize:36, color:'white'}}>Back</Text>
            </Pressable>

            <Text style={styles.logo}>{amount}</Text>
            <Text style={styles.logo}>BUZZED IN: LUIS</Text>
            
            <View style={{flexDirection: 'row', marginBottom:20}}>
              <Pressable style={{marginRight: 40}}>
                  <Text style={{fontSize:36, color:'green'}} onPress={()=>handleCorrect('Luis')}>Correct</Text>
              </Pressable>
              <Pressable >
                  <Text style={{fontSize:36, color:'red'}} onPress={()=>handleIncorrect('Luis')}>Incorrect</Text>
              </Pressable>
            </View>
            <Pressable >
              <Text style={{fontSize:36, color:'orange'}} onPress={handleDailyDouble}>Daily Double</Text>
            </Pressable>
          </View>
        </BottomSheetModal>
    )
  }
  
  export default HostPanel
  
  const styles = StyleSheet.create({
    container: {
          backgroundColor: '#5f68b8',
    },
    modalContentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    logo:{
      fontSize:36,
      color:'white',
      marginVertical:'10%',
      fontWeight:'700'
    },
    logoColor: {
      color: '#6A41FF',
      textDecorationLine: 'none',
    },
  })