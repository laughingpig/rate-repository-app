import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {Link} from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15
  },
});

const AppBarTab = ({text, link, onPress}) => {
  return (
    <>
    <View>
      {link ?
      <TouchableWithoutFeedback>
        <Link to={link}><Text style={styles.tab}>{text}</Text></Link>
      </TouchableWithoutFeedback>
      : 
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.tab}>{text}</Text>
      </TouchableWithoutFeedback>     
      } 
    </View>
    </>
  );
};

export default AppBarTab;