import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'

const HowToPlay = ({navigation}) => {
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>

        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>Introducing J ! Party, the ultimate Jeopardy companion app that brings the excitement of the iconic game show right to your fingertips! With J ! Party, you can host your very own trivia showdown with up to __ friends or family members, as you battle it out to become the J ! Party champion.</Text>
        
        <Text style={styles.sectionTitle}>Note:</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>This application works best if all participants are on the same wifi network or hotspot connection. </Text>
       
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>

      </ScrollView>
  )
}

export default HowToPlay

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#16182A',
  },
  scrollcontainer: {
    marginTop:100,
    paddingBottom: 150 ///This is very important for scrolling to the bottom, adjust as needed
  },
  logo:{
    fontSize:60,
    color:'white',
    marginVertical:'10%',
    fontWeight:'700',
    textAlign: 'center',
  },
  sectionTitle:{
    fontSize:40,
    color:'white',
    left: '5%', 
    fontWeight:'700',
  },
  sectionInfo:{
    fontSize:18,
    justifyContent: 'center',
    marginLeft:'15%',
    marginRight:'5%',
    marginTop:'5%',
    marginBottom:'5%',
    color:'white',
    
  },
  underline: {
    width: '50%',
    bottom:'1%',
    left: '3.5%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  },
  logoColor: {
    color: '#6A41FF',
    textDecorationLine: 'none',
  },
})