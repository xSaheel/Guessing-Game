import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../UI/Card';
import Colors from '../constants/Colors';
import WinScreen from './WinScreen';

const GameScreen = ({ number, onNewGamePress }) => {

  const generateRandomNumber = (min, max, exclude) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if(randomNumber === currentNumber){
          generateRandomNumber(low, high, currentNumber);
      }
      else {
        return randomNumber;
      }
  }

  const [score, setScore] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber(low, high, number));

  const greaterThan = () => {
    if(number < currentNumber){
        Alert.alert('Invalid Move',`Your number is surely less than ${currentNumber}`);
        return;
    }
    setLow(currentNumber);
    setCurrentNumber(generateRandomNumber(currentNumber, high, currentNumber));
    setScore(score + 1);
  }

  const lessThan = () => {
    if(number > currentNumber){
        Alert.alert('Invalid Move',`Your number is surely greater than ${currentNumber}`);
        return;
    }
    setHigh(currentNumber);
    setCurrentNumber(generateRandomNumber(low, currentNumber, currentNumber));
    setScore(score + 1);
  }

  const newGameHandler = () => {
    setCurrentNumber();
    setScore(0);
    setLow(0);
    setHigh(100);
    onNewGamePress();
  }

  return (
    <Card style={styles.card}>
        {currentNumber !== number ? 
        <View>
            <View style={styles.scoreContainer}>
                <Text style={styles.score}>Score: {score}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
            <Text style={styles.currentNumber}>{currentNumber}</Text>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Button color={Colors.primary} title="Greater" onPress={greaterThan}/>
                </View>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.button}>
                    <Button color={Colors.primary} title="Smaller" onPress={lessThan}/>
                </View>
            </View>
        </View> : <WinScreen score={score} onNewGame={newGameHandler}/>}
    </Card>
  );
}

const styles = StyleSheet.create({

    card: {
        margin: 50,
        marginBottom: 130,
        marginTop: 130,
    },

    scoreContainer: {
        flexDirection: 'row',
        marginVertical: 30
    },

    score: {
        color: '#766161',
        fontWeight: '700',
        fontSize: 20,
        marginHorizontal: 50
    },  

    number: {
        color: '#766161',
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 70,
    },

    currentNumber: {
        fontSize: 70,
        fontWeight: '700',
        color: '#766161',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 50,
    },

    btnContainer: {
        flexDirection: 'row',
        margin: 30
    },

    button: {
        color: Colors.lightSecondary,
        borderRadius: 8,
        marginHorizontal: 20,
        width: 80
    },

    orText: {
        marginTop: 7,
        color: '#766161',
        fontWeight: '600'
    }
});

export default GameScreen;