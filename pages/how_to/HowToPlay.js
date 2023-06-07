import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import QuizSVG from "./QuizSVG"
import WifiSVG from "./WifiSVG"
import BackButtonSVG from '../../SVGS/BackButtonSVG'

const { width, height } = Dimensions.get('window')
const HowToPlay = ({navigation}) => {
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => navigation.navigate('Main')}>
            <BackButtonSVG/>
          </Pressable>
        </View>

        <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>

        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>Introducing J <Text style={styles.logoColor}>!</Text> Party, the ultimate Jeopardy companion app that brings the excitement of the iconic game show right to your fingertips! With J <Text style={styles.logoColor}>!</Text> Party, you can host your very own trivia showdown with up to __ friends or family members, as you battle it out to become the J <Text style={styles.logoColor}>!</Text> Party champion.</Text>
       
        <View style={styles.noticeContainer}>
          <Text style={styles.noticeTitle}>Notice</Text>
          <View style={styles.noticeUnderline}></View>
          <Text style={styles.noticeInfo}>This application works best if all participants are connected to the same Wi-Fi network or Hotspot connection.</Text>
          <WifiSVG/>
          
        </View>
        
        <Text style={styles.sectionTitle}>{'\n'}Roles</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>One player will take on the role of <Text style={styles.hostColor}>host</Text>, while the remaining participants will become contestants.{'\n'}{'\n'}
        As the <Text style={styles.hostColor}>host</Text> you will have the responsibility of:{'\n'}{'\n'}   1. Ensuring all participants are{'\n'}{'\t'} connected and starting the game.{'\n'}{'\n'}   2. Awarding or deducting points for {'\n'}{'\t'}  correct and incorrect answers.{'\n'}{'\n'}   3. Dismissing questions if the answer{'\n'}{'\t'}  has been revealed before players{'\n'}{'\t'}  on their devices have answered.{'\n'}{'\n'}   4. Awarding Daily Doubles and {'\n'}{'\t'}  overseeing final J <Text style={styles.logoColor}>!</Text> Party.{'\n'}{'\n'}As a <Text style={styles.logoColor}>contestant</Text> your main responsibilities include:{'\n'}{'\n'}   1. Joining the <Text style={styles.hostColor}>host</Text>'s game session.{'\n'}{'\n'}   2. Being ready to compete.{'\n'}{'\n'}   3. Buzzing in promptly, and providing{'\n'}{'\t'}  your response within the allotted {'\n'}{'\t'}  time.</Text>  
    
        <QuizSVG/>

        <Text style={styles.sectionTitle}>FREE FOR ALL<Text style={styles.logoColor}>!</Text></Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>The standard and lively way to play J <Text style={styles.logoColor}>!</Text> Party at home! Everyone who buzzes in gets to answer. Contestants compete by shouting out their answers, while the host tallies their scores. </Text>

        <Text style={styles.sectionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>If the contestant that buzzed in gives an incorrect response, the opportunity to "re-buzz" becomes available to all other contestants.</Text>

        <Text style={styles.sectionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>The contestants get to answer in the order that they buzzed in. This process continues up until a correct answer is given or until the question is dismissed.</Text>

        <Text style={styles.sectionTitle}>DEDUCTIONS<Text style={styles.logoColor}>!</Text></Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>By disabling deductions, players can enjoy the game without the stressor of losing points for incorrect answers.</Text>

        

      </ScrollView>
  )
}
/*TOP FOR TEXT STYLE onPress does that need to be changed to a dimensional format*/
export default HowToPlay

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#16182A',
    /*flex: 1,
    alignItems: "center",
    justifyContent: "center",*/
  },
  scrollcontainer: {
    marginTop:100,
    paddingBottom: 500 ///This is very important for scrolling to the bottom, adjust as needed
  },
  noticeContainer: {
    borderColor: '#6a41ff',
    borderWidth:  Dimensions.get("screen").width * 0.01,
    borderRadius: Dimensions.get("screen").width * 0.1,
   /* width: width,
    height: height * 0.8,
    backgroundColor: '#16182A',*/
  },
  noticeInfo:{
    fontSize:18,
    color:'white',
    justifyContent: 'center',
    marginLeft: Dimensions.get("screen").width * 0.10,
    marginTop:  Dimensions.get("screen").height * 0.05,
  },
  noticeTitle:{
    textAlign: "center",
    fontSize: 40,
    color:'white',
  },
  noticeUnderline: {
    
    width:  Dimensions.get("screen").height * 0.5,
    height: Dimensions.get("screen").height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  },
  backButtonContainer: {
    width: '100%',
    marginHorizontal:'1%',
    marginVertical:'-4%',
    justifyContent:'flex-start',
  },
  logo:{
    fontSize:60,
    color:'white',
    marginVertical:'3%',
    fontWeight:'700',
    textAlign: 'center',
  },
  sectionTitle:{
    justifyContent: 'center',
    fontSize:40,
    color:'white',
    left: Dimensions.get("screen").height * 0.01,
    fontWeight:'700',
  },
  sectionInfo:{
    fontSize:18,
    justifyContent: 'center',
    marginLeft:   Dimensions.get("screen").width * 0.1,
    marginRight:  Dimensions.get("screen").width * 0.05,
    marginTop:    Dimensions.get("screen").height * 0.02,
    marginBottom: Dimensions.get("screen").height * 0.05,
    color:'white',
  },
  underline: {
    width: Dimensions.get("screen").width * 0.88,
    bottom:'0%',
    left: Dimensions.get("screen").width * 0.03,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  },
  logoColor: {
    color: '#6A41FF',
    textDecorationLine: 'none',
  },
  hostColor:{
    color:'#FFD700',
    textDecorationLine: 'none',
  },
})

