import React from 'react';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 15,
    backgroundColor: '#e1e4e8'
  }
});

const RepositoryList = () => {
  const { repositories } = useRepositories();
  
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  return (
    <View style={styles.container}>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => {
        return (<RepositoryItem item={item} />);
      }}
    />
    </View>
  );
};

export default RepositoryList;