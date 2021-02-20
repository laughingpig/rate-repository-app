import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  cont: {
    margin: 15
  },
  buttonText: {
    backgroundColor: '#0366d6',
    color: '#fff',
    height: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 40
  }
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.cont}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async ({username, password}) => {
    try {
      await signIn({ username, password });
      history.push('/');
    }
    catch(e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;