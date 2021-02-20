import React, {useContext} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useHistory } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
  const history = useHistory();
  const { data } = useQuery(gql`
  {
    authorizedUser {
      id
      username
    }
  }`);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleSignOut = async() => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');    
  };
  const authorizedUser = data ? data.authorizedUser : undefined;

  return (
    <>
    <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/' />
      {authorizedUser ? <AppBarTab text='Sign out' onPress={handleSignOut} /> : <AppBarTab text='Sign in' link='/signin' />}
    </ScrollView>
    </View>
    </>
  );
};

export default AppBar;