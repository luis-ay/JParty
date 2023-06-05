import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Ending = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
        <Text style={{color: 'white', fontSize:36}}>Ending</Text>
        <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>
    </View>
  )
}

export default Ending

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16182A',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
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