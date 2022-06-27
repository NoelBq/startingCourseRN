import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberComponent = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberComponent

const styles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        borderColor: '#143F6B',
        padding: 24, 
        margin: 24, 
        borderRadius: 7
        
    },
    numberText: {
        color: '#143F6B',
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center'
        
    }
})