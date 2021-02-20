import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AuthStorage from '../utils/authStorage';
import { useApolloClient } from '@apollo/client';
//import AUTHORIZE from '../graphql/mutations';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(gql`
  mutation ($username: String!, $password:String!) {
    authorize(credentials: {
      username: $username,
      password: $password
    }) {
      accessToken
    }
  }
`);

  const signIn = async ({ username, password }) => {
    const {data} = await mutate({variables: {username,password}});
    const authStore = new AuthStorage();

    await authStore.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;