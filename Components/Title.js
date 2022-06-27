import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return  <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#F55353',
        textAlign: 'center',
        borderWidth: 2, 
        borderColor: '#F55353',
        padding: 12,
        marginTop: 14, 
        marginBottom: 12
    } 
})