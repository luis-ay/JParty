import { StyleSheet, Text, View, Pressable, Dimensions, Platform, PixelRatio } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectName } from '../../features/gameSlice'
import { TextInput } from 'react-native-gesture-handler'
import { changeName } from '../../features/gameSlice'

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

const Buzzer = ({navigation}) => {
    const storedName = useSelector(selectName)
    const [ready, setReady] = useState(false)
    const [name, setName] = useState(storedName ==''? 'Name' : storedName)
    const dispatch = useDispatch()

    const handleBuzzIn = () => {
        if (ready) {
            console.log('Buzzed In')
        }
        dispatch(changeName(name))
    }

    const handleNameChange = () => {
        if (name=='') {
            setName('Name')
        }
        dispatch(changeName(name))
    }

  return (
    <Pressable onPress={()=>handleBuzzIn()}>
        <View style={ready? styles.ready : styles.unready}>
            <View style={styles.scoreContainer}>
                <TextInput style={styles.answer} fontWeight='bold' placeholder={name} value={name} onChangeText={setName} onSubmitEditing={handleNameChange} placeholderTextColor={'#b8b3c9'} maxLength={30} returnKeyType="done"></TextInput>
                <Text style={styles.score}>{4000}</Text>
            </View>
            <Text style={{color:'white', fontSize: normalize(20)}}>{ready ? 'Click anywhere to buzz in.': 'Wait for host.'}</Text>
            <Pressable onPress={()=>setReady(!ready)}><Text>Click Ready/Unready</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Main')}>
                <Text style={{fontSize:normalize(36), color:'white', top:'50%'}}>Back</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Wager')}>
                <Text style={{fontSize:normalize(36), color:'white', top:'50%'}}>FinalJParty</Text>
            </Pressable>
        </View>
    </Pressable>
  )
}

export default Buzzer

const styles = StyleSheet.create({
    ready: {
        backgroundColor: '#6A41FF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    unready: {
        backgroundColor: '#38218a',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    score: {
        marginTop:'20%',
        fontSize: normalize(48),
        color: 'white',
        fontWeight: 800
    },
    answer: {
        marginTop: '20%',
        width: '70%',
        height: '15%',
        fontSize: normalize(60),
        color: 'white',
    },
    scoreContainer: {
        alignItems:'center'
    }
})