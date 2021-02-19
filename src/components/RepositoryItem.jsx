import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemHead from './ItemHead';
import Parameter from './Parameter';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 15,
    backgroundColor: '#fff'
  },
  numRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ItemHead image={item.ownerAvatarUrl} fullName={item.fullName}  description={item.description} language={item.language} />
      <View style={styles.numRow}>
        <Parameter number={item.stargazersCount} unit='Stars' />
        <Parameter number={item.forksCount} unit='Forks' />
        <Parameter number={item.reviewCount} unit='Reviews' />
        <Parameter number={item.ratingAverage} unit='Rating' />
      </View>
    </View>
  );
};

export default RepositoryItem;