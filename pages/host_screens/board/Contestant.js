import { StyleSheet, Text, View, Pressable, Dimensions, Platform, PixelRatio } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../../../features/gameSlice'
import AddSvg from '../../../SVGS/AddSVG'
import SubSvg from '../../../SVGS/SubSVG'

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

const { width, height } = Dimensions.get('window')
const Contestant = ({contestant, currscore, type}) => {
    const [score, setScore] = useState(currscore)
    const [updating, setUpdating] = useState(false)
    const [leftClicked, setLeftClicked] = useState(false)
    const [rightClicked, setRightClicked] = useState(false)
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
                <Pressable onPress={handleAdd} style={leftClicked ? [styles.active,{borderBottomLeftRadius:15}] : {width:'49%', height: '100%', borderBottomLeftRadius:15, alignItems:'center', justifyContent:'center'}} onPressIn={()=>setLeftClicked(true)} onPressOut={()=> setLeftClicked(false)}>
                    <AddSvg/>
                </Pressable>
                <View style={{width:0,height:'100%',borderColor:'#6a41ff', borderWidth:1,}}></View> 
                <Pressable onPress={handleSub} style={rightClicked ? [styles.active,{borderBottomRightRadius:15}] : {width:'49%', height: '100%', borderBottomRightRadius: 15, alignItems:'center', justifyContent:'center'}} onPressIn={()=>setRightClicked(true)} onPressOut={()=> setRightClicked(false)}>
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
        fontSize: normalize(20)
    },
    score : {
        color: 'white',
        fontSize: normalize(30),
        paddingBottom: '10%'
    },
    scoreUpdating : {
        color: 'white',
        fontSize: normalize(30),
        paddingBottom: '2%'
    },
    add_sub: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        justifyContent: 'space-evenly',
        borderColor: '#6a41ff',
        borderWidth: 2,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
    },
    addText: {
        color: 'white',
        fontSize: normalize(16),
        paddingTop: '4%'
    },
    active: {
        backgroundColor: '#6a41ff',
        width:'49%', 
        height: '100%', 
        alignItems:'center', 
        justifyContent:'center'
    }
})