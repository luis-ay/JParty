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
        <Text style={styles.sectionInfo}>Introducing J ! Party, the ultimate Jeopardy companion app that brings the excitement of the iconic game show right to your fingertips! With J ! Party, you can host your very own trivia showdown with up to __ friends or family members, as you battle it out to become the J ! Party champion.</Text>
       
        <Text style={styles.sectionTitle}>Note:</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>This application works best if all of the participants are connected to the same Wi-Fi network or Hotspot connection.{'\n'}</Text>
        
        <QuizSVG/>
        
        <Text style={styles.sectionTitle}>{'\n'}Roles</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>One player will take on the role of host, while the remaining participants will become contestants.{'\n'}{'\n'}
        As the host you will have the responsibility of:{'\n'}{'\n'}   1. Ensuring all participants are connected and ready to play.{'\n'}{'\n'}   2. Starting the game and maintaining its flow.{'\n'}{'\n'}   3. Awarding or deducting points for correct and incorrect answers.{'\n'}{'\n'}   4. Dismissing questions if the answer has been revealed before players on their devices have answered.{'\n'}{'\n'}   5. Awarding Daily Doubles and overseeing wagering.{'\n'}{'\n'}   6. Leading Final Jeopardy, including presenting the category and clue.</Text>  
    
        <HostSVG/>

        <Text style={styles.sectionInfo}>As a contestant your main responsibilities include:{'\n'}{'\n'}   1. Joining the host's game session.{'\n'}{'\n'}   2. Getting ready to compete. Be attentive and prepare to buzz in.{'\n'}{'\n'}   3. Buzz in promptly and provide your response within the allotted time.</Text>


        <Text style={styles.sectionTitle}>RE!BUZZ</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>In RE!BUZZ mode, if the contestant who buzzes in gives an incorrect response, the opportunity to buzz in becomes immediately available to all of the other contestants.{'\n'}{'\n'}</Text>

        <Text style={styles.sectionTitle}>QUICK!SHIFT</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>In QUICK!SHIFT mode, the contestants get to answer in the order that they buzzed in. If the contestant who buzzes in gives an incorrect response, the second contestant who buzzed in now has the opportunity to answer, up to however many contestants buzzed in.{'\n'}{'\n'}(This mode may prove to be the better option if you're trying to play alongside the show.)</Text>

        <Text style={styles.sectionTitle}>DEDUCTIONS DISABLED!</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>We provide the option to disable deductions, allowing for a less competitive experience.
         By disabling deductions, players can enjoy the game without the worry of losing points for incorrect answers. This feature creates a more relaxed and casual atmosphere, emphasizing participation, learning, and fun rather than the competitive aspect of scoring.
         Whether you're looking for a friendly trivia gathering or a low-pressure learning experience, disabling deductions offers flexibility and customization to match your desired style of play. It ensures that everyone can enjoy the game at their own pace and comfort level, 
         fostering a more inclusive and enjoyable Jeopardy experience for all participants.</Text>

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
    marginBottom:'10%',
    color:'white',
  },
  underline: {
    width: '50%',
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
})

