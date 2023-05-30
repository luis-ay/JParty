import { StyleSheet, Text, View, SafeAreaView, Switch, Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'
import { changeGameMode, changeDeductions, selectGameMode, selectDeductions } from '../../features/gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'


const Settings = ({navigation}) => {
  // Need to set component state to whats persisted in the store, need to use selectors

  const dispatch = useDispatch()
  const storeRebuzz = useSelector(selectGameMode)
  const storeDeductions = useSelector(selectDeductions)

  const [rebuzz, setReBuzz] = useState(storeRebuzz)
  const [quickPass, setQuickPass] = useState(!storeRebuzz)
  const [deductions, setDeductions] = useState(storeDeductions)


  const toggleMode = () => {
    dispatch(changeGameMode(!rebuzz))
    setReBuzz(!rebuzz)
    setQuickPass(!rebuzz ? false : true)
  }
  const toggleDeductions = () => {
    dispatch(changeDeductions(!deductions))
    setDeductions(!deductions)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>SETTINGS<Text style={styles.logoColor}>!</Text></Text>
      
      <View style={styles.underline}></View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={toggleMode}
          value={rebuzz}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <View style={styles.underline}></View>


      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={toggleMode}
          value={quickPass}
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

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>FREE FOR ALL<Text style={styles.logoColor}>!</Text></Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}

          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
      <View style={styles.underline}></View>

      <Pressable onPress={() => navigation.navigate('Main')}>
        <Text style={{fontSize:36, color:'white'}}>Back</Text>
      </Pressable>

      

    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  logo:{
    fontSize:60,
    color:'white',
    marginVertical:'10%',
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
    width: '100%',
    bottom:'3%',
    height: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#6A41FF',
  }

})