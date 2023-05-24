import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'

const HowToPlay = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Text style={{fontSize:36, color:'white'}}>Back</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HowToPlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#16182A',
    alignItems: 'center',
    maxHeight:'100%',
    justifyContent: 'center'
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