import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ style, ...rest }) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily']
    .map((e) => {
      if (rest[e]) {
        return styles[e](rest[e]);
      }
    })
    .filter((e) => e);

  return (
    <TextInput
      autoCapitalize={'none'}
      autoCompleteType={'email'}
      maxLength={255}
      underlineColorAndroid="rgba(0,0,0,0)"
      {...rest}
      style={[styles.defaultStyle, combinedStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    paddingVertical: 0,
  },
  color: (color) => {
    return { color };
  },
  fontSize: (size) => {
    return { fontSize: size };
  },
  fontFamily: (fontFamily) => {
    return { fontFamily };
  },
});

export default Input;
