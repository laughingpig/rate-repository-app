import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';
import Text from './Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
  },
  fieldout: {
    marginBottom: 10,
  },
  field: {
    borderWidth: 1,
    borderColor: '#555',
    height: 40,
    padding: 5,
  },
  errorField: {
    borderColor: '#d73a4a',
    borderWidth: 1,
    height: 40,
    padding: 5,    
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.fieldout}>
      <TextInput
        style={showError ? styles.errorField : styles.field}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;