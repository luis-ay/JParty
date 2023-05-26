import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'

const HowToPlay = ({navigation}) => {
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Text style={{fontSize:36, color:'white'}}>Back</Text>
        </Pressable>
      </ScrollView>
  )
}

export default HowToPlay

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