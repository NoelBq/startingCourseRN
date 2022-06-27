import { StyleSheet, Text, View, Alert, Button} from 'react-native'
import React, {useState} from 'react'
import Title from '../Components/Title'
import NumberComponent from '../Components/NumberComponent'
import PrimaryButton from '../Components/PrimaryButton'

const GamesScreen = ({userNumber}) => {
 
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
          return generateRandomBetween(min, max, exclude);
        } else {
          return rndNum;
        }
   }

   function checking () {
       console.log('checking if onPress fucking works')
   }

   function guessHandler(direction) {
    
        if((direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Don`t Lie', 'You know this is wrong', 
            [{text: 'Sorry', style: 'cancel'}]
            )
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess -1
        }
        const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newGuess)

        console.log('handler pressed')
   }

  return (
    <View style={styles.gamesScreenContainer}>
    <Title>Opponent's Guess </Title>
      <NumberComponent>{currentGuess}</NumberComponent>
      <View>
          <Text>Higher or Lower</Text>
          <View>
            <Button 
            title='btn to check'
            onPress={checking}
            />
            <Button 
            title='Another chekign BTN'
            onPress={guessHandler}
            />

           <PrimaryButton onPress={checking}>+</PrimaryButton>
           <PrimaryButton onPress={guessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
      </View>
      <View>
          <Text>Log Rounds</Text>
      </View> 
    </View>
  )
}

export default GamesScreen

const styles = StyleSheet.create({
    gamesScreenContainer: {
        flex: 1,
        padding: 12,
    },

})