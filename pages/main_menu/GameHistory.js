import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native'
import React from 'react'

const GameHistory = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        <Text>GameHistory: Timmy been GAy</Text>
        <Pressable onPress={() => navigation.navigate('Main')}>
              <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default GameHistory

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#16182A',
  },
  container: {
    backgroundColor: '#16182A',
    marginTop: 60,
  },
  scrollcontainer: {
    paddingBottom: 1000, ///This is very important for scrolling to the bottom, adjust as needed
    alignItems: 'center'
  },
  logo:{
    fontSize:36,
    color:'white',
    marginVertical:'10%',
    fontWeight:'700',
    },
  logoColor: {
      color: '#6A41FF',
      textDecorationLine: 'none',
  },
})