import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
/*import SvgComponent from "./svgComponent"*/


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
       
        <Text style={styles.sectionTitle}>Roles</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>One lucky player will take on the role of the host, while the remaining participants will become contestants. Either way, everyone’s trivia knowledge will be put to the test.</Text>      
        
        <Text style={styles.sectionTitle}>Re!Buzz</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>In Re!Buzz mode, when a contestant buzzes in and provides an answer, the excitement doesn't end there. If the first player who buzzed in gives an incorrect response, the opportunity immediately shifts to the other contestants, giving them another shot at buzzing in and answering the question correctly.
         This feature adds an extra layer of strategy and anticipation to the game. As the tension builds, contestants must stay alert and ready to seize the moment when their opponents stumble. Re!Buzz mode allows for a thrilling back-and-forth battle as participants compete to be the first to buzz in with the correct response and earn valuable points.
         Whether you're waiting to pounce on a missed answer or hoping to recover from a near-miss, Re!Buzz mode keeps the energy high and the competition intense. It's the perfect option for those seeking a fast-paced, engaging Jeopardy experience that keeps everyone on their toes.
         So, get ready to outwit, outbuzz, and outscore your opponents in Re!Buzz mode. Will you seize the opportunity to turn the tables and prove yourself as the ultimate Jeopardy champion? The challenge awaits!    </Text>

        <Text style={styles.sectionTitle}>Quick!Shift</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>When a contestant buzzes in and provides an answer, the pressure is on! If the first player who buzzed in gives an incorrect response, the opportunity immediately shifts to the next contestant in line. This means that the game keeps moving quickly, giving each player a chance to showcase their knowledge and potentially steal the points!
         With Quick Shift, the intensity builds as contestants eagerly wait for their opportunity to pounce on a missed answer and take their shot at securing points. It adds an element of strategy and timing to the game, as players must balance their desire to answer quickly with the risk of getting it wrong and passing the opportunity to the next participant.
         This feature brings an extra layer of excitement and unpredictability to your Jeopardy experience, making every moment count. So, get ready to quicken the pace, test your knowledge, and seize the opportunity to shine in Quick Shift mode!</Text>

        <Text style={styles.sectionTitle}>Deductions Disabled!</Text>
        <View style={styles.underline}></View>
        <Text style={styles.sectionInfo}>We understand that different players may have varying preferences for the level of competition they seek. Therefore, we provide the option to disable deductions, allowing for a less competitive experience.
         By disabling deductions, players can enjoy the game without the worry of losing points for incorrect answers. This feature creates a more relaxed and casual atmosphere, emphasizing participation, learning, and fun rather than the competitive aspect of scoring.
         Whether you're looking for a friendly trivia gathering or a low-pressure learning experience, disabling deductions offers flexibility and customization to match your desired style of play. It ensures that everyone can enjoy the game at their own pace and comfort level, fostering a more inclusive and enjoyable Jeopardy experience for all participants.</Text>

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
    marginBottom:'5%',
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

