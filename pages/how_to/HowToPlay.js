import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import QuizSVG from "./QuizSVG"
import HostSVG from "./HostSVG"


const HowToPlay = ({navigation}) => {
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        <Text style={styles.logo}>HOW TO PLAY<Text style={styles.logoColor}>!</Text></Text>

        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>Introducing J <Text style={styles.logoColor}>!</Text> Party, the ultimate Jeopardy companion app that brings the excitement of the iconic game show right to your fingertips! With J <Text style={styles.logoColor}>!</Text> Party, you can host your very own trivia showdown with up to __ friends or family members, as you battle it out to become the J <Text style={styles.logoColor}>!</Text> Party champion.</Text>
       
        <Text style={styles.sectionTitle}>Note:</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>This application works best if all of the participants are connected to the same Wi-Fi network or Hotspot connection.{'\n'}</Text>
        
        <QuizSVG/>
        
        <Text style={styles.sectionTitle}>{'\n'}Roles</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>One player will take on the role of <Text style={styles.hostColor}>host</Text>, while the remaining participants will become contestants.{'\n'}{'\n'}
        As the <Text style={styles.hostColor}>host</Text> you will have the responsibility of:{'\n'}{'\n'}   1. Ensuring all participants are{'\n'}{'\t'} connected and ready to play.{'\n'}{'\n'}   2. Starting the game and maintaining{'\n'}{'\t'}  its flow.{'\n'}{'\n'}   3. Awarding or deducting points for {'\n'}{'\t'}  correct and incorrect answers.{'\n'}{'\n'}   4. Dismissing questions if the answer{'\n'}{'\t'}  has been revealed before players{'\n'}{'\t'}  on their devices have answered.{'\n'}{'\n'}   5. Awarding Daily Doubles and {'\n'}{'\t'}  overseeing wagering.{'\n'}{'\n'}   6. Orienting Final J <Text style={styles.logoColor}>!</Text> Party.</Text>  
    
        <HostSVG/>

        <Text style={styles.sectionInfo}>As a <Text style={styles.logoColor}>contestant</Text> your main responsibilities include:{'\n'}{'\n'}   1. Joining the <Text style={styles.hostColor}>host</Text>'s game session.{'\n'}{'\n'}   2. Being ready to compete.{'\n'}{'\n'}   3. Buzzing in promptly, and providing{'\n'}{'\t'}  your response within the allotted {'\n'}{'\t'}  time.</Text>

        <Text style={styles.sectionTitle}>FREE FOR ALL<Text style={styles.logoColor}>!</Text></Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>The standard and lively way to play J <Text style={styles.logoColor}>!</Text> Party at home! Everyone who buzzes in gets to answer. Contestants compete by shouting out their answers, while the host tallies their scores. </Text>

        <Text style={styles.sectionTitle}>RE<Text style={styles.logoColor}>!</Text>BUZZ</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>If the contestant that buzzed in gives an incorrect response, the opportunity to "re-buzz" becomes available to all other contestants.</Text>

        <Text style={styles.sectionTitle}>QUICK<Text style={styles.logoColor}>!</Text>SHIFT</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>The contestants get to answer in the order that they buzzed in. This process continues up until a correct answer is given or until the question is dismissed.</Text>

        <Text style={styles.sectionTitle}>DEDUCTIONS DISABLED<Text style={styles.logoColor}>!</Text></Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>By disabling deductions, players can enjoy the game without the worry of losing points for incorrect answers.</Text>

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
    /*flex: 1,
    alignItems: "center",
    justifyContent: "center",*/
  },
  scrollcontainer: {
    marginTop:100,
    paddingBottom: 900 ///This is very important for scrolling to the bottom, adjust as needed
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
    marginLeft:'10%',
    marginRight:'5%',
    marginTop:'5%',
    marginBottom:'11%',
    color:'white',
  },
  underline: {
    width: '85%',
    bottom:'0%',
    left: '3.5%',
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

