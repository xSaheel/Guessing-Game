import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import Card from '../UI/Card';
import Colors from '../constants/Colors';

const Home = props => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const resetNumber = () => {
        setEnteredNumber('');
    }

    const startGame = () => {
        if(enteredNumber){
            const number = parseInt(enteredNumber);
            props.onStartGame(number);
        }
        else{
            Alert.alert('Invalid Number', 'Please enter a Number');
        }
    }

    return (
        <Card style={styles.card}>
            <Text style={styles.header}>Enter a Number 😎</Text>
            <TextInput style={styles.input} 
                keyboardType='number-pad' 
                maxLength={2} 
                blurOnSubmit 
                onChangeText={text => setEnteredNumber(text)} 
                value={enteredNumber}/>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Button color={Colors.primary} title="START" onPress={startGame}/>
                </View>
                <View style={styles.button}>
                    <Button color={Colors.primary} title="RESET" onPress={resetNumber}/>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
      margin: 50,
      marginBottom: 130,
      marginTop: 130,
    },

    btnContainer: {
        flexDirection: 'row',
    },

    button: {
        color: Colors.lightSecondary,
        borderRadius: 8,
        marginHorizontal: 20,
        width: 80
    },

    input: {
        backgroundColor: Colors.lightSecondary,
        color: Colors.primary,
        padding: 8,
        borderRadius: 8,
        width: 200,
        margin: 20,
        elevation: 5,
        textAlign: 'center',
    },

    header: {
        fontSize: 23,
        color: Colors.lightSecondary,
        fontWeight: '600'
    }
})

export default Home;