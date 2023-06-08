import { StyleSheet, Text, View, SafeAreaView, Switch, Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'
import { changeGameMode, changeDeductions, selectGameMode, selectDeductions } from '../../features/gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import BackButtonSVG from '../../SVGS/BackButtonSVG'


const Settings = ({navigation}) => {
  // Need to set component state to whats persisted in the store, need to use selectors

  const dispatch = useDispatch()
  const storedMode = useSelector(selectGameMode)
  const storeDeductions = useSelector(selectDeductions)

  const [mode, setMode] = useState(storedMode)
  const [deductions, setDeductions] = useState(storeDeductions)


  const toggleMode = (modeInt) => {
    if (modeInt == mode) {
      if (modeInt + 1 < 3) {
        dispatch(changeGameMode(modeInt + 1))
        setMode(modeInt + 1)
      }
      else {
        dispatch(changeGameMode(0))
        setMode(0)
      }
    }
    else {
      dispatch(changeGameMode(modeInt))
      setMode(modeInt)
    }
  }

  const toggleDeductions = () => {
    dispatch(changeDeductions(!deductions))
    setDeductions(!deductions)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <BackButtonSVG/>
        </Pressable>
      </View>

      <Text style={styles.logo}>SETTINGS<Text style={styles.logoColor}>!</Text></Text>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>FREE 4 ALL<Text style={styles.logoColor}>!</Text></Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          value={mode==0}
          onValueChange={()=>toggleMode(0)}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <View style={styles.underline}></View>


      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={()=>toggleMode(1)}
          value={mode==1}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <View style={styles.underline}></View>


      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={()=>toggleMode(2)}
          value={mode==2}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <View style={styles.underline}></View>


      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>DEDUCTIONS<Text style={styles.logoColor}>!</Text></Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={toggleDeductions}
          value={deductions}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <View style={styles.underline}></View>

    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  logo:{
    fontSize:50,
    color:'white',
    fontWeight:'700'
  },
  logoColor: {
    color: '#6A41FF',
    textDecorationLine: 'none',
  },
  optionTitle: {
    fontSize:36,
    color:'white',
    fontWeight:'700',
  },
  backButtonContainer: {
    width: '100%',
    marginHorizontal:'1%',
    justifyContent:'flex-start',
  },
  optionContainer:
  {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '20%',
    paddingHorizontal: '5%',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#16182A',
    alignItems: 'center',
    maxHeight:'100%',
    justifyContent: 'center'
  },
  underline: {
    width: '95%',
    bottom:'5.5%',
    height: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#6A41FF',
  }

})