import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  text: string;
  backgroundColor?: string;
}

export const BotonCalc = ({text, backgroundColor = '#2d2d2d'}: Props) => {
  return (
    <View
      style={{
        ...styles.boton,
        backgroundColor,
      }}>
      <Text style={styles.botonTexto}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: 80,
    height: 80,
    // backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
});
