import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectName } from '../../features/gameSlice'
import { TextInput } from 'react-native-gesture-handler'
import { changeName } from '../../features/gameSlice'

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
            <Text style={{color:'white', fontSize: 20}}>{ready ? 'Click anywhere to buzz in.': 'Wait for host.'}</Text>
            <Pressable onPress={()=>setReady(!ready)}><Text>Click Ready/Unready</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Main')}>
                <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('FinalJParty')}>
                <Text style={{fontSize:36, color:'white', top:'50%'}}>FinalJParty</Text>
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
        fontSize: 48,
        color: 'white',
        fontWeight: 800
    },
    answer: {
        marginTop: '20%',
        width: '70%',
        height: '15%',
        fontSize: 60,
        color: 'white',
    },
    scoreContainer: {
        alignItems:'center'
    }
})