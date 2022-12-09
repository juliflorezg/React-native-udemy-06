import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

type Operaciones = 'sumar' | 'restar' | 'multiplicar' | 'dividir';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operaciones>();

  console.log(setPreviousNumber);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    //number can't contain multiple decimal points
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      setNumber(textNumber);
      // decimal point
      if (textNumber === '.') {
        setNumber(number + textNumber);
      }
      //test for other 0 and a decimal point present
      else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      }
      //test if it's other than 0 and there's no decimal point
      else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      }
      // test for multiple 0 at the beginning
      else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const makeNegativeNumber = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const delDigit = () => {
    setNumber(currentNumber => {
      let newNumber = '';

      if (currentNumber.length === 1) {
        newNumber = '0';
        return newNumber;
      } else if (currentNumber.startsWith('-') && currentNumber.length === 2) {
        newNumber = '0';
        return newNumber;
      } else {
        newNumber = currentNumber.slice(0, -1);
        return newNumber;
      }

      // return '';
    });
  };

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divideBtn = () => {
    changePreviousNumber();
    lastOperation.current = 'dividir';
  };
  const multiplyBtn = () => {
    changePreviousNumber();
    lastOperation.current = 'multiplicar';
  };
  const subtractBtn = () => {
    changePreviousNumber();
    lastOperation.current = 'restar';
  };
  const addBtn = () => {
    changePreviousNumber();
    lastOperation.current = 'sumar';
  };

  const performCalculation = () => {
    const firstNum = Number(previousNumber);
    const secondNum = Number(number);

    switch (lastOperation.current) {
      case 'sumar':
        setNumber(`${firstNum + secondNum}`);

        break;
      case 'restar':
        setNumber(`${firstNum - secondNum}`);

        break;
      case 'multiplicar':
        setNumber(`${firstNum * secondNum}`);

        break;
      case 'dividir':
        if (secondNum === 0) {
          setNumber('Math error');
        } else {
          if (Number.isNaN(firstNum / secondNum)) {
            setNumber('Error');
          } else {
            setNumber(`${firstNum / secondNum}`);
          }
        }
        break;
    }

    setPreviousNumber('0');
  };

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
