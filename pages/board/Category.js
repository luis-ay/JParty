import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({value, answerCount}) => {
  return (
    <View style={answerCount>=5 ? styles.inactive : styles.active}>
      <Text style={answerCount>=5 ? styles.inactiveText : styles.activeText} >{value}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#6A41FF',
        borderRadius: '25%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactive : {
        backgroundColor: '#5a5d70',
        borderRadius: '25%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeText: {
        color: '#FFD700',
        fontSize: 34,
        fontWeight: 700
    },
    inactiveText: {
        color: '#aeb1c2',
        fontSize: 34,
        fontWeight: 700
    }
})