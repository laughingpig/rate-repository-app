import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
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
`;
