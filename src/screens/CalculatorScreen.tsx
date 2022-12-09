import React from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    makeNegativeNumber,
    buildNumber,
    delDigit,
    addBtn,
    subtractBtn,
    multiplyBtn,
    divideBtn,
    performCalculation,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultadoPequeno}>{previousNumber}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" backgroundColor="#9b9b9b" action={clean} />
        <BotonCalc
          text="+/-"
          backgroundColor="#9b9b9b"
          action={makeNegativeNumber}
        />
        <BotonCalc text="del" backgroundColor="#9b9b9b" action={delDigit} />
        <BotonCalc text="/" backgroundColor="#ff9427" action={divideBtn} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" action={buildNumber} />
        <BotonCalc text="8" action={buildNumber} />
        <BotonCalc text="9" action={buildNumber} />
        <BotonCalc text="X" backgroundColor="#ff9427" action={multiplyBtn} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" action={buildNumber} />
        <BotonCalc text="5" action={buildNumber} />
        <BotonCalc text="6" action={buildNumber} />
        <BotonCalc text="-" backgroundColor="#ff9427" action={subtractBtn} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" action={buildNumber} />
        <BotonCalc text="2" action={buildNumber} />
        <BotonCalc text="3" action={buildNumber} />
        <BotonCalc text="+" backgroundColor="#ff9427" action={addBtn} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" isWide action={buildNumber} />
        <BotonCalc text="." action={buildNumber} />
        <BotonCalc text="=" action={performCalculation} />
      </View>
    </View>
  );
};
