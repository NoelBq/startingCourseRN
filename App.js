import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './Screens/StartGameScreen';
import GamesScreen from './Screens/GamesScreen';
import React , {useState} from 'react'


export default function App() {

  const [userNumber, setUserNumber] = useState(null)

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler}/>
  
  if(userNumber) {
    screen = <GamesScreen userNumber={userNumber}/>
  }

  return (
    <LinearGradient colors={['#FCF7A1', '#FFDD60']} style={styles.rootScreen}>
      <ImageBackground 
            source={require('./assets/images/background.png')}
            resizeMode='cover'
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
            >
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style='auto'/>
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1
    },
    backgroundImage: {
      opacity: 0.5
    }
});
