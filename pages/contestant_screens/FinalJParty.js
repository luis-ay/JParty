import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const FinalJParty = () => {
  return (
    <View>
      <Text>FinalJParty</Text>
      <Pressable onPress={() => navigation.navigate('Main')}>
          <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>
    </View>
  )
}

export default FinalJParty

const styles = StyleSheet.create({})