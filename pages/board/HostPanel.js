import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeductions, selectGameMode, subScore } from '../../features/gameSlice'
import { useState, React } from 'react'
import { addScore } from '../../features/gameSlice'

const HostPanel = ({route, navigation}) => {
    const {value} = route.params
    const [amount, setAmount] = useState(value)
    const [dailyDouble, setDailyDouble] = useState(false)
    const rebuzz = useSelector(selectGameMode)
    const deductions = useSelector(selectDeductions)
    const dispatch = useDispatch()

    const handleDailyDouble= () => {
        if (!dailyDouble) {
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
        dispatch(addScore({contestant:contestant, amount:amount}))
        navigation.navigate('Board')
    }



    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
          <Text style={styles.logo}>HOST PANEL<Text style={styles.logoColor}>!</Text></Text>

          <Pressable onPress={() => navigation.navigate('Board')}>
            <Text style={{fontSize:36, color:'white'}}>Back</Text>
          </Pressable>

          <Text style={styles.logo}>{amount}</Text>
          <Text style={styles.logo}>BUZZED IN: LUIS</Text>
          
          <View>
            <Pressable >
                <Text style={{fontSize:36, color:'green'}} onPress={()=>handleCorrect('Luis')}>Correct</Text>
            </Pressable>
            <Pressable >
                <Text style={{fontSize:36, color:'red'}} onPress={()=>handleIncorrect('Luis')}>Incorrect</Text>
            </Pressable>
          </View>
          <Pressable >
            <Text style={{fontSize:36, color:'orange'}} onPress={handleDailyDouble}>Daily Double</Text>
          </Pressable>
        </ScrollView>
    )
  }
  
  export default HostPanel
  
  const styles = StyleSheet.create({
    container: {
          backgroundColor: '#16182A',
    },
    scrollcontainer: {
      marginTop:100,
      paddingBottom: 150 ///This is very important for scrolling to the bottom, adjust as needed
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