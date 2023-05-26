import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'

const Category = ({value, answerCount, panelAmountRef, modalOpenRef}) => {

  handleClick = () => {
    panelAmountRef.current = value
    console.log(`Just clicked on category, value should be ${value}, what was sent ${panelAmountRef.current}`)
    modalOpenRef.current?.present();
  }

  return (
    <Pressable style={answerCount>=5 ? styles.inactive : styles.active} onPress={()=> handleClick(value)}>
      <Text style={answerCount>=5 ? styles.inactiveText : styles.activeText} >{value}</Text>
    </Pressable>
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
        alignItems: 'center',
        borderWidth: 10,
        borderColor:'#5a5d70',
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