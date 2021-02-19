import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15, 
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <>
    <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/' />
      <AppBarTab text='Sign in' link='/signin' />
    </ScrollView>
    </View>
    </>
  );
};

export default AppBar;