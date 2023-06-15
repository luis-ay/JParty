import { StyleSheet, Text, View, Pressable, Keyboard, Dimensions, Platform, PixelRatio } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Slider } from '@miblanchard/react-native-slider'
import { useDispatch, useSelector } from 'react-redux'
import { addFinalAnswer, addWager, selectName } from '../../features/gameSlice'
import { useIsFocused } from '@react-navigation/native'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 428;
  
  export function normalize(size) {
    const newSize = size * scale 
    console.log(scale) 
    console.log(newSize) 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

const Wager = ({navigation}) => {
    const name = useSelector(selectName)
    const [wager, setWager] = useState(0)
    const [limit, setLimit] = useState(1000)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        console.log(`Turned In wager which is :${wager}`) 
        dispatch(addWager({contestant:name, wager:wager}))
        navigation.navigate('Waiting')
    }
    
  return (
    <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
        <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
        <View style={{alignItems:'center', width:'100%', height:'50%'}}>
            <Text style={styles.title}>Enter Wager:</Text>
            <Text style={styles.score}>${wager}</Text> 
            <View style={{width:'70%', marginTop:'15%'}}>
                <Slider value={wager} onValueChange={setWager} maximumTrackTintColor='white' minimumTrackTintColor='#8e6ffc' maximumValue={limit} minimumValue={0} step={100} trackClickable={true} thumbStyle={styles.thumb} trackStyle={styles.track}/>
            </View>
        </View>
        <Pressable onPress={()=> handleSubmit()}><Text style={{fontSize: normalize(40), color: 'white', fontWeight: 800}}>Submit</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:normalize(36), color:'white', top:'50%'}}>Back</Text>
        </Pressable>
    </Pressable>
  )
}

export default Wager

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16182A',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    logo:{
        fontSize:normalize(36),
        color:'white',
        marginVertical:'10%',
        fontWeight:'700',
    },
    logoColor: {
        color: '#6A41FF',
        textDecorationLine: 'none',
    },
    title: {
        margin: '10%',
        fontSize: normalize(40),
        color: 'white',
        fontWeight: 800
    },
    score: {
        fontSize: normalize(48),
        color: 'white',
        fontWeight: 800,
        marginTop:'10%'
    },
    track: {
        borderRadius: 25,
        height: 15,
    },
    thumb: {
        height: 40,
        width:12,
        borderRadius:25,
        backgroundColor: '#6A41FF'
    }
})