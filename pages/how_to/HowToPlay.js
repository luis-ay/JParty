import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import QuizSVG from "./QuizSVG"
import WifiSVG from "./WifiSVG"
import BackButtonSVG from '../../SVGS/BackButtonSVG'

const { width, height } = Dimensions.get('window')
const HowToPlay = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => navigation.navigate('Main')}>
            <BackButtonSVG/>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.scrollcontainer}>
          <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>



          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>Introducing J <Text style={styles.logoColor}>!</Text> Party, the ultimate Jeopardy companion app that brings the excitement of the iconic game show right to your fingertips! With J <Text style={styles.logoColor}>!</Text> Party, you can host your very own trivia showdown with up to __ friends or family members, as you battle it out to become J <Text style={styles.logoColor}>!</Text> Party champion.</Text>
        
          <View style={styles.noticeContainer}>
            <Text style={styles.noticeTitle}>Notice</Text>
            <Text style={styles.noticeInfo}>This application works best if all participants are connected to the same Wi-Fi network or Hotspot connection.</Text>
            <WifiSVG/>
            
          </View>
          
          <Text style={styles.sectionTitle}>{'\n'}Roles</Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>One player will take on the role of <Text style={styles.hostColor}>host</Text>, while the remaining participants will become contestants.{'\n'}{'\n'}
          As the <Text style={styles.hostColor}>host</Text> you are responsible for:{'\n'}{'\n'}   1. Ensuring all participants are{'\n'}{'\t'} connected before starting.{'\n'}{'\n'}   2. Awarding or deducting points for {'\n'}{'\t'}  correct and incorrect answers.{'\n'}{'\n'}   3. Dismissing questions if the answer{'\n'}{'\t'}  has been revealed while playing {'\n'}{'\t'} along with the show{'\n'}{'\n'}  4. Awarding Daily Doubles and {'\n'}{'\t'}  overseeing Final J <Text style={styles.logoColor}>!</Text> Party{'\n'}{'\n'}As a <Text style={styles.logoColor}>contestant</Text> your main responsibilities include:{'\n'}{'\n'}   1. Joining the <Text style={styles.hostColor}>host</Text>'s game session{'\n'}{'\n'}   2. Buzzing in promptly, and providing{'\n'}{'\t'}  your responses within the allotted {'\n'}{'\t'}  time frame</Text>  
      
          <QuizSVG/>

          <Text style={styles.sectionTitle}>FREE FOR ALL<Text style={styles.logoColor}>!</Text></Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>The standard and lively way to play J <Text style={styles.logoColor}>!</Text> Party at home! Everyone who buzzes in gets to answer. Contestants compete by shouting out their answers, while the host tallies their scores. </Text>

          <Text style={styles.sectionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>If the contestant that buzzed in gives an incorrect response, buzzers are reset to allow other players to buzz in.</Text>

          <Text style={styles.sectionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>The contestants get to answer in the order that they buzzed in.</Text>

          <Text style={styles.sectionTitle}>DEDUCTIONS<Text style={styles.logoColor}>!</Text></Text>
          <View style={styles.underline}></View>
          <Text style={styles.sectionInfo}>By disabling deductions, players can enjoy the game without the stressor of losing points for incorrect answers.</Text>

        </ScrollView>
    </View>
  )
}
/*TOP FOR TEXT STYLE onPress does that need to be changed to a dimensional format*/
export default HowToPlay

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#16182A',
  },
  scrollcontainer: {
    paddingBottom: 150 ///This is very important for scrolling to the bottom, adjust as needed
  },
  noticeContainer: {
    backgroundColor: '#272B4A',
    borderRadius: Dimensions.get("screen").width * 0.1,
    marginHorizontal: Dimensions.get("screen").width * 0.1,
    alignItems: 'center'
  },
  noticeInfo:{
    fontSize:18,
    color:'white',
    width: '85%',
  },
  noticeTitle:{
    marginVertical:'4%',
    textAlign: "center",
    fontSize: 40,
    color:'white',
  },
  noticeUnderline: {
    height: Dimensions.get("screen").height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  },
  backButtonContainer: {
    marginHorizontal:'1%',
    justifyContent:'flex-start',
    marginTop: '15%'
  },
  logo:{
    fontSize:40,
    color:'white',
    fontWeight:'700',
    textAlign: 'center',
    marginBottom: '10%'
  },
  logoColor: {
    color: '#6A41FF',
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
    width: Dimensions.get("screen").width * 0.7,
    bottom:'0%',
    left: Dimensions.get("screen").width * 0.03,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  },
  hostColor:{
    color:'#FFD700',
  },
})

