import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const PrimaryButton = ({ children, onPress }) => {


    return (
        <View style={styles.btnOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.btnInnerContainer, styles.pressed] : styles.btnInnerContainer} 
            onPress={onPress} 
            android_ripple={{ color: Colors.dimBlueColor400 }}>
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btnInnerContainer: {
        backgroundColor: Colors.darkerBlue500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
    }, 
    btnOuterContainer: {
        borderRadius: 25,
        margin: 4,
        overflow: 'hidden'
    },
    btnText: {
        color: "#dddd",
        textAlign: 'center',
        margin: 5,
    }, 
    pressed: {
        opacity: 0.75
    }
})