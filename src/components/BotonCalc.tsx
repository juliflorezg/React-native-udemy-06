import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  backgroundColor?: string;
  isWide?: boolean;
  action: (textNumber: string) => void;
}

export const BotonCalc = ({
  text,
  backgroundColor = '#2d2d2d',
  isWide = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor,
          width: isWide ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: backgroundColor === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
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
