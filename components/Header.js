import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (    
        <View style={styles.headerBody}>
            <Text style={styles.title}>Guessing Game</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBody: {
        width: '100%',
        height: 90,
        backgroundColor: '#da7f8f',
        paddingTop: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#faf3f3',
        fontWeight: '600'
    }
})

export default Header;