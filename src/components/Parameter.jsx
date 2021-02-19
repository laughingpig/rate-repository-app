import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  number: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  unit: {
    textAlign: 'center'
  }
});

const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};

const Parameter = ({number, unit}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{kFormatter(number)}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};

export default Parameter;