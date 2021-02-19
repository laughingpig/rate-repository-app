import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15  
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  headcont: {
    paddingLeft: 15,
    paddingRight: 15
  },
  headTitle: {
    fontWeight: 'bold'
  },
  lang: {
    backgroundColor: '#0366d6',
    color: '#fff',
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: 2
  }
});

const ItemHead = ({image, fullName, description, language}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.headcont}>
        <Text style={styles.headTitle}>{fullName}</Text>
        <Text>{description}</Text>
        <Text style={styles.lang}>{language}</Text>
      </View>
    </View>
  );
};

export default ItemHead;