import { StyleSheet, Text, View, SafeAreaView, Switch, Pressable } from 'react-native'
import React,{useState} from 'react'



const Settings = ({navigation}) => {
  const [rebuzz, setReBuzz] = useState(true)
  const [quickPass, setQuickPass] = useState(false)
  const [deductions, setDeductions] = useState(true)

  const toggleSwitch = () => {
    setReBuzz(!rebuzz)
    setQuickPass(!rebuzz ? false : true)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>SETTINGS<Text style={styles.logoColor}>!</Text></Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={toggleSwitch}
          value={rebuzz}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={toggleSwitch}
          value={quickPass}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>DEDUCTIONS<Text style={styles.logoColor}>!</Text></Text>
        <Switch
          trackColor={{false:'#aeb1c2', true:'#6A41FF'}}
          thumbColor={'#FFF'}
          onValueChange={()=>setDeductions(!deductions)}
          value={deductions}
          style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
      <Pressable onPress={() => navigation.navigate('Main')}>
        <Text style={{fontSize:36, color:'white'}}>Back</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
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
  
})