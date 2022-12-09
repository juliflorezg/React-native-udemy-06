import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
export const CalculatorScreen = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  console.log(setPreviousNumber);

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    setNumber(number + textNumber);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{previousNumber}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" backgroundColor="#9b9b9b" action={clean} />
        <BotonCalc text="+/-" backgroundColor="#9b9b9b" action={clean} />
        <BotonCalc text="del" backgroundColor="#9b9b9b" action={clean} />
        <BotonCalc text="/" backgroundColor="#ff9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" action={buildNumber} />
        <BotonCalc text="8" action={buildNumber} />
        <BotonCalc text="9" action={buildNumber} />
        <BotonCalc text="X" backgroundColor="#ff9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" action={buildNumber} />
        <BotonCalc text="5" action={buildNumber} />
        <BotonCalc text="6" action={buildNumber} />
        <BotonCalc text="-" backgroundColor="#ff9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" action={buildNumber} />
        <BotonCalc text="2" action={buildNumber} />
        <BotonCalc text="3" action={buildNumber} />
        <BotonCalc text="+" backgroundColor="#ff9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" isWide action={buildNumber} />
        <BotonCalc text="." action={buildNumber} />
        <BotonCalc text="=" action={clean} />
      </View>
    </View>
  );
};
