import React from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc text="C" backgroundColor="#9b9b9b" />
        <BotonCalc text="+/-" backgroundColor="#9b9b9b" />
        <BotonCalc text="del" backgroundColor="#9b9b9b" />
        <BotonCalc text="/" backgroundColor="#ff9427" />
      </View>
    </View>
  );
};
