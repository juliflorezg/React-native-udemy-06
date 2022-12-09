import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // backgroundColor: 'salmon',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 30,
    textAlign: 'right',
  },
  boton: {
    width: 80,
    height: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
});
