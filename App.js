import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './constants/Colors';
import Header from './components/Header';
import Home from './components/Home';
import GameScreen from './components/GameScreen';

export default function App() {

  const [number, setNumber] = useState();

  const startGameHandler = selectedNumber => {
    setNumber(selectedNumber);
  }

  const newGameHandler = () => {
    setNumber();
  }

  return (
    <View style={styles.container}>
      <Header/>
      {number ? <GameScreen number={number} onNewGamePress={newGameHandler}/> : <Home onStartGame={startGameHandler}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightSecondary,
  },
});
