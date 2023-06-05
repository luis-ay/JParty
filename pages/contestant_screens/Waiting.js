import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Waiting = ({navigation}) => {
  return (
    <View>
      <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
      <Text>WAITING FOR HOST...</Text>
    </View>
  )
}

export default Waiting

const styles = StyleSheet.create({
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