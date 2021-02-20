import { useQuery } from '@apollo/react-hooks';
//import GET_REPOSITORIES from '../graphql/queries';
import { gql } from 'apollo-boost';

const useRepositories = () => {
    const { data, error, loading } = useQuery(gql`
    query{
      repositories {
        totalCount,
        edges{
          node {
            fullName,
            id,
            description,
            ratingAverage,
            stargazersCount,
            reviewCount,
            forksCount,
            ownerAvatarUrl,
            language
          }
        }
      }
    }
  `, {
      fetchPolicy: 'cache-and-network',
    });    

    return {
      repositories: data ? data.repositories : undefined,
      loading,
      error
    };
};

export default useRepositories;