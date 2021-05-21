import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../constants/Colors';

const WinScreen = props => {

  const newGame = () => {
      props.onNewGame();
  } 
    
  return (
    <View>
        <Text style={styles.winText}>YOU WON!</Text>
        <Text style={styles.score}>Score: {props.score}</Text>
        <View style={styles.button}>
            <Button color={Colors.primary} title="New Game" onPress={newGame}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        margin: 50,
        marginBottom: 130,
        marginTop: 130,
    },
    score: {
        color: '#766161',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center',
        marginHorizontal: 50
    }, 
    winText: {
        fontSize: 50,
        fontWeight: '700',
        color: '#766161',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    button: {
        color: Colors.lightSecondary,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 230
    },
});

export default WinScreen;
