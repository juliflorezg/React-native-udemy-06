import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View>
        {/* Boton */}
        <View style={styles.boton}>
          <Text style={styles.botonTexto}>1</Text>
        </View>
      </View>
    </View>
  );
};
