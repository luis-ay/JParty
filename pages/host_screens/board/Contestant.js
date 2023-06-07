import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../../../features/gameSlice'
import AddSvg from '../../../SVGS/AddSVG'
import SubSvg from '../../../SVGS/SubSVG'

const { width, height } = Dimensions.get('window')
const Contestant = ({contestant, currscore, type}) => {
    const [score, setScore] = useState(currscore)
    const [updating, setUpdating] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=> {
        setScore(currscore)
    },[currscore])

    const handleAdd = () => {
        dispatch(addScore({contestant:contestant, amount:100}))
    }
    const handleSub = () => {
        dispatch(subScore({contestant:contestant, amount:100}))
    }

  return (
    <Pressable style={updating ? styles.updating : styles.container} onPress={()=> setUpdating(!updating)}>
        <View style={updating ? styles.innerContainerUpdating : styles.innerContainer}>
            <Text style={styles.name}>{contestant}</Text>
        </View>
        <Text style={updating ? styles.scoreUpdating : styles.score}>${score}</Text>
        {updating && 
            <View style={styles.add_sub}>
                <Pressable onPress={handleAdd}>
                    <AddSvg/>
                </Pressable>
                <View style={{width:0,height:'100%',borderColor:'#6a41ff', borderWidth:1,}}></View> 
                <Pressable onPress={handleSub}>
                    <SubSvg/>
                </Pressable>
            </View>
        }
    </Pressable>
  )
}

export default Contestant

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: '#6a41ff',
        borderWidth: 4,
        borderRadius: 25,
        width: width * 0.40,
        height: height * 0.12,
        margin: '2%',
        justifyContent: 'space-between'
    },
    updating: {
        alignItems: 'center',
        borderColor: '#6a41ff',
        borderWidth: 4,
        borderRadius: 25,
        width: width * 0.40,
        height: height * 0.15,
        margin: '2%',
        justifyContent: 'space-between'
    },
    innerContainer: {
        backgroundColor: '#6a41ff',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '30%',
    },
    innerContainerUpdating: {
        backgroundColor: '#6a41ff',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '23%',
    },
    name: {
        color: 'white',
        fontSize: 20
    },
    score : {
        color: 'white',
        fontSize: 30,
        paddingBottom: '10%'
    },
    scoreUpdating : {
        color: 'white',
        fontSize: 30,
        paddingBottom: '2%'
    },
    add_sub: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderColor: '#6a41ff',
        borderWidth: 2,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
    },
    addText: {
        color: 'white',
        fontSize: 16,
        paddingTop: '4%'
    }
})