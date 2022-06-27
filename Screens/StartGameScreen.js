import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React , {useState} from 'react'
import PrimaryButton from '../Components/PrimaryButton'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const StartGameScreen = ({onPickedNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    const inputHanddler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const confirmInputHanddler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Must be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: () => {setEnteredNumber('')}}]
            )
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Lorem ipsum'
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={inputHanddler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmInputHanddler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 80,
        backgroundColor: '#143F6B',
        marginHorizontal: 20,
        borderRadius: 6,
        elevation: 4,
        shadowColor: '#442',
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        alignItems: 'center'

    },
    numberInput: {
        height: 50,
        width: 60,
        textAlign: 'center',
        fontSize: 30,
        borderBottomColor: "#FEB139",
        borderBottomWidth: 2,
        color: "#FEB139",
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1
    }
})