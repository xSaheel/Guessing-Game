import React from 'react';
import { View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.darkSecondary,
      borderRadius: 20,
      elevation: 6
    }
})

export default Card;